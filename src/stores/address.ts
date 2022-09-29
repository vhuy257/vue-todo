import { defineStore } from 'pinia';
import { requiredFieldError } from '@/config/error';
import allCountries from '@/config/config';
import type { Address } from '@/model/address';
import { saveAddress } from '@/service/address';

export const useAddressStore = defineStore({
    id: 'address',
    state: () => ({
        addressForm: [
            {
                type: 'input',
                name: 'firstname',
                label: 'First Name',
                value: '',
                errorList: [] as string[]
            },
            {
                type: 'input',
                name: 'lastname',
                label: 'Last Name',
                value: '',
                errorList: [] as string[]
            },
            {
                type: 'input',
                name: 'vatnumber',
                label: 'VAT Number',
                value: '',
                errorList: [] as string[]
            },
            {
                type: 'input',
                name: 'phonenumber',
                label: 'Phone Number',
                value: '',
                errorList: [] as string[]
            },
            {
                type: 'select',
                name: 'country',
                label: 'Country',
                listValue: allCountries as string[],
                value: 'Select your country',
                errorList: [] as string[]
            },
            {
                type: 'input',
                name: 'zippostalcode',
                label: 'Zip/Postal Code',
                value: '',
                errorList: [] as string[]
            },
            {
                type: 'input',
                name: 'streetaddress1',
                label: 'Street Address',
                value: '',
                errorList: [] as string[]
            }
        ],
        shippingAdress: {}
    }),
    actions: {
        checkFormValid() {
            this.addressForm.map((item) => {
                const check =
                    item.value == '' || item.value == 'Select your country';

                if (check) {
                    !item.errorList.includes(requiredFieldError) &&
                        item.errorList.push(requiredFieldError);
                } else {
                    item.errorList = item.errorList.filter(
                        (item) => item !== requiredFieldError
                    );
                }

                return check;
            });
        },
        updateValueInput(name: string, val: string) {
            this.addressForm.map((item) => {
                if (item.name == name) {
                    item.value = val;
                }
            });
            this.checkFormValid();
        },
        saveFormAddress() {
            this.checkFormValid();

            const addressData = {
                firstname: this.addressForm[0].value,
                lastname: this.addressForm[1].value,
                vatnumber: this.addressForm[2].value,
                phonenumber: this.addressForm[3].value,
                zipcode: this.addressForm[5].value,
                streetaddress: this.addressForm[6].value
            };

            saveAddress(addressData);
        }
    }
});

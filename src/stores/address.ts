import { defineStore } from 'pinia';
import { requiredFieldError } from '@/config/error';
import allCountries from '@/config/config';

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
            },
            {
                type: 'input',
                name: 'streetaddress2',
                label: 'Street Address',
                value: '',
                errorList: [] as string[]
            },
            {
                type: 'input',
                name: 'streetaddress3',
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
                if (item.value == '' || item.value == 'Select your country') {
                    !item.errorList.includes(requiredFieldError) &&
                        item.errorList.push(requiredFieldError);
                } else {
                    item.errorList = item.errorList.filter(
                        (item) => item !== requiredFieldError
                    );
                }
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
        }
    }
});

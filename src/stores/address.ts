import { defineStore } from 'pinia';

export const useAddressStore = defineStore({
    id: 'address',
    state: () => ({
        addressForm: [
            {
                type: 'input',
                label: 'First Name',
                value: ''
            },
            {
                type: 'input',
                label: 'Last Name',
                value: ''
            },
            {
                type: 'input',
                label: 'VAT Number',
                value: ''
            },
            {
                type: 'input',
                label: 'Phone Number',
                value: ''
            },
            {
                type: 'select',
                label: 'Country',
                value: ''
            },
            {
                type: 'input',
                label: 'Zip/Postal Code',
                value: ''
            },
            {
                type: 'input',
                label: 'Street Address',
                value: '',
                name: 'street'
            },
            {
                type: 'input',
                label: 'Street Address',
                value: '',
                name: 'street'
            },
            {
                type: 'input',
                label: 'Street Address',
                value: '',
                name: 'street'
            }
        ]
    }),
    actions: {
        updateValueInput(val: string) {
            this.addressForm[0].value = val;
            console.log(val, this.addressForm);
        }
    }
});

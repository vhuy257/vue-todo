<script lang="ts">
import InputComponentVue from './Input/InputComponent.vue';
import SelectComponentVue from './Select/SelectComponent.vue';
import { useAddressStore } from '@/stores/address';
export default {
    setup() {
        const useAddress = useAddressStore();
        const shippingAddressForm = useAddress.addressForm;
        useAddress.getAddressData();
        return {
            useAddress,
            shippingAddressForm
        };
    },
    components: {
        InputComponentVue,
        SelectComponentVue
    }
};
</script>
<template>
    <div class="checkout--wrapper-content_shipping__address">
        <div class="checkout--wrapper-content_shipping__address-header">
            <h2>Shipping Address</h2>
            <button class="checkout--wrapper-content_shipping__address-header">
                Add New Address
            </button>
        </div>
        <div
            class="checkout--wrapper-content_shipping__address-form"
            v-if="!Object.keys(useAddress.shippingAdress).length"
        >
            <div
                v-for="item in shippingAddressForm"
                :key="item"
                :class="item.name"
            >
                <InputComponentVue
                    v-if="item.type == 'input'"
                    :label="item.label"
                    :value="item.value"
                    :name="item.name"
                    :errorList="item.errorList"
                />
                <SelectComponentVue
                    v-if="item.type == 'select'"
                    :listValue="item.listValue"
                    :errorList="item.errorList"
                    :name="item.name"
                    :value="item.value"
                    :label="item.label"
                />
            </div>
        </div>
        <div
            class="checkout--wrapper-content_shipping__address-data"
            v-if="Object.keys(useAddress.shippingAdress).length"
        >
            <div class="checkout--wrapper-content_shipping__address-data_item">
                <p>
                    {{ useAddress.shippingAdress.firstname }}
                    {{ useAddress.shippingAdress.lastname }}
                </p>
                <p>{{ useAddress.shippingAdress.vatnumber }}</p>
                <p>{{ useAddress.shippingAdress.phonenumber }}</p>
                <p>{{ useAddress.shippingAdress.zipcode }}</p>
                <p>{{ useAddress.shippingAdress.streetaddress }}</p>
            </div>
        </div>
        <div
            class="checkout--wrapper-content_shipping__address-form_actions"
            v-if="!Object.keys(useAddress.shippingAdress).length"
        >
            <button @click="useAddress.saveFormAddress">Save address</button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import '@/assets/mixins.scss';
.checkout--wrapper-content {
    &_shipping__address {
        width: 750px;
        &-header {
            @include flex-container($align: center);
            button {
                @include buttonSecondary();
                padding: 5px 7px;
            }
        }
        &-data {
            margin-top: 40px;
            &_item {
                max-width: 250px;
                border: 1px solid green;
                padding: 10px 15px;
                border-radius: 5px;
                font-size: 14px;
                p {
                    margin: 5px 0;
                }
            }
        }
        &-form {
            @include flex-container($align: center);
            &_input {
                margin: 10px 0;
                width: 100%;
                &.firstname,
                &.lastname {
                    width: 48%;
                }
            }
            input {
                width: 100%;
            }
            &_actions {
                margin-top: 40px;
                button {
                    @include buttonPrimary();
                }
            }
            [class^='streetaddress'] {
                width: 100%;
            }
            .firstname,
            .lastname {
                width: 48%;
            }
            .vatnumber {
                width: 100%;
            }
        }
    }
}
</style>

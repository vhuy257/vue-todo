<template>
    <div class="checkout--wrapper-content_shipping__address">
        <div class="checkout--wrapper-content_shipping__address-header">
            <h2>Shipping Address</h2>
            <button class="checkout--wrapper-content_shipping__address-header">
                Add New Address
            </button>
        </div>
        <div class="checkout--wrapper-content_shipping__address-form">
            <div
                class="checkout--wrapper-content_shipping__address-form_input firstname"
            >
                <input placeholder="First Name" />
            </div>
            <div
                class="checkout--wrapper-content_shipping__address-form_input lastname"
            >
                <input placeholder="Last Name" />
            </div>
            <div class="checkout--wrapper-content_shipping__address-form_input">
                <input placeholder="Vat Number" />
            </div>
            <div class="checkout--wrapper-content_shipping__address-form_input">
                <input placeholder="Phone Number" />
            </div>
            <div class="checkout--wrapper-content_shipping__address-form_input">
                <input placeholder="Street Address" />
            </div>
            <div class="checkout--wrapper-content_shipping__address-form_input">
                <input placeholder="Street Address" />
            </div>
            <div class="checkout--wrapper-content_shipping__address-form_input">
                <input placeholder="Street Address" />
            </div>
            <div class="checkout--wrapper-content_shipping__address-form_input">
                <input placeholder="City" />
            </div>
            <div class="checkout--wrapper-content_shipping__address-form_input">
                <input placeholder="Zip/Postal Code" />
            </div>
        </div>
        <div class="checkout--wrapper-content_shipping__address-form_actions">
            <button>Save address</button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import '@/assets/mixins.scss';
.checkout--wrapper-content {
    &_shipping__address {
        &-header {
            @include flex-container($align: center);
            button {
                @include buttonSecondary();
                padding: 5px 7px;
            }
        }
        &-form {
            max-width: 700px;
            margin-top: 10px;
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
                margin-top: 20px;
                button {
                    @include buttonPrimary();
                }
            }
        }
    }
}
</style>

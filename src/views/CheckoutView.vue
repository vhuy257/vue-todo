<script lang="ts">
import CheckoutSummaryComponentVue from '@/components/CheckoutSummaryComponent.vue';
import ShippingAddressComponentVue from '@/components/ShippingAddressComponent.vue';
import CheckoutPaymentsMethods from '../components/CheckoutPaymentsMethods.vue';
export default {
    components: {
        ShippingAddressComponentVue,
        CheckoutSummaryComponentVue,
        CheckoutPaymentsMethods
    }
};
</script>
<template>
    <div class="checkout--wrapper-step">
        <div class="checkout--wrapper-step_item">
            <div class="checkout--wrapper-step_item__icon">
                <img
                    src="../assets/images/shipping-fast-solid-svgrepo-com.svg"
                    width="30"
                />
            </div>
            <strong>Step 1</strong>
            <span>Shipping</span>
        </div>
        <div class="checkout--wrapper-step_item">
            <div class="checkout--wrapper-step_item__icon">
                <img
                    src="../assets/images/credit-card-two-sides-svgrepo-com.svg"
                    width="35"
                />
            </div>
            <strong>Step 2</strong>
            <span>Review & Payments</span>
        </div>
        <div class="checkout--wrapper-step_item">
            <div class="checkout--wrapper-step_item__icon">
                <img
                    src="../assets/images/checked-svgrepo-com.svg"
                    width="25"
                />
            </div>
            <strong>Step 3</strong>
            <span>Completed</span>
        </div>
    </div>
    <div class="checkout--wrapper-content">
        <div class="checkout--wrapper-content_left--column">
            <ShippingAddressComponentVue />
            <CheckoutPaymentsMethods />
        </div>
        <div class="checkout--wrapper-content_right--column">
            <CheckoutSummaryComponentVue />
        </div>
    </div>
</template>
<style lang="scss">
@import '@/assets/mixins.scss';
.checkout--wrapper {
    &-step {
        max-width: var(--main-layout-max-width);
        margin: 20px auto;
        @include flex-container($align: center, $justify: center);
        &_item {
            margin: 0 40px;
            text-align: center;
            font-size: 14px;
            width: 170px;
            &__icon {
                width: 60px;
                height: 60px;
                border-radius: 100%;
                background-color: var(--color-blue-lighter);
                text-align: center;
                margin: 0 auto;
                position: relative;
                @include flex-container($align: center, $justify: center);
                &::after {
                    content: '';
                    position: absolute;
                    right: 100%;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 190px;
                    height: 1px;
                    background-color: var(--button-main-background-color);
                }
            }
            &:first-child {
                .checkout--wrapper-step_item__icon::after {
                    display: none;
                }
            }
            strong {
                font-weight: 500;
                margin-top: 20px;
                display: block;
            }
            span {
                display: block;
                text-align: center;
                padding: 5px 7px;
                border-radius: 3px;
                color: var(--button-main-background-color);
                font-weight: 300;
                font-size: var(--font-l);
            }
        }
    }
    &-content {
        max-width: var(--main-layout-max-width);
        margin: 20px auto;
        @include flex-container($align: flex-start);
    }
}
</style>

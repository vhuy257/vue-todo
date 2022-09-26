<script lang="ts">
import { useCartStore } from '@/stores/cart';
export default {
    setup() {
        const cart = useCartStore();
        return {
            cart
        };
    }
};
</script>
<template>
    <div class="checkout--wrapper-content__order-summary">
        <h2>Order Summary</h2>
        <h5>{{ cart.cartListItems.length }} items in cart.</h5>
        <div class="checkout--wrapper-content__order-summary--list">
            <div
                v-for="item in cart.cartListItems"
                :key="item.id"
                class="checkout--wrapper-content__order-summary--list-item"
            >
                <div
                    class="checkout--wrapper-content__order-summary--list-item__left-column"
                >
                    <div
                        class="checkout--wrapper-content__order-summary--list-item__left-column_image"
                    >
                        <img :src="item.thumbnail" width="75" />
                    </div>
                    <div
                        class="checkout--wrapper-content__order-summary--list-item__left-column_content"
                    >
                        <strong>{{ item.title }}</strong>
                        <small>Qty: {{ item.qty }}</small>
                    </div>
                </div>
                <div
                    class="checkout--wrapper-content__order-summary--list-item__right-column"
                >
                    ${{ item.totalPrice }}
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
@import '@/assets/mixins.scss';
.checkout--wrapper-content__order-summary {
    width: 450px;
    &--list {
        margin-top: 20px;
        &-item {
            @include flex-container($align: flex-start);
            margin-bottom: 20px;
            &__left-column {
                @include flex-container($align: flex-start);
                &_image {
                    margin-right: 10px;
                    img {
                        border-radius: 5px;
                    }
                }
                &_content {
                    @include flex-container($dir: column, $align: flex-start);
                    small {
                        color: var(--vt-c-text-light-2);
                        font-weight: 500;
                    }
                }
            }
            &__right-column {
                font-weight: 500;
                color: var(--color-red);
            }
        }
    }
}
</style>

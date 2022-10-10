<script lang="ts">
import { useCartStore } from '@/stores/cart';
import PaymentMethodsComponent from '../components/PaymentMethodsComponent.vue';

export default {
    setup() {
        const cart = useCartStore();
        return {
            cart
        };
    },
    components: {
        PaymentMethodsComponent
    }
};
</script>
<template>
    <div class="cart-wrapper">
        <h1>Cart</h1>
        <div class="cart-wrapper--content">
            <div class="cart-wrapper--content__main">
                <div
                    v-for="item in cart.cartListItems"
                    :key="item.id"
                    class="cart-wrapper--content__main-item"
                >
                    <div class="cart-wrapper--content__main-item_left">
                        <div
                            class="cart-wrapper--content__main-item_left-thumbnail"
                        >
                            <img :src="item.thumbnail" width="120" />
                        </div>
                        <div
                            class="cart-wrapper--content__main-item_left-detail"
                        >
                            <div
                                class="cart-wrapper--content__main-item_left-detail_title"
                            >
                                <a
                                    :href="'/product/' + item.id"
                                    class="cart-wrapper--content__main-item_left_product-name"
                                >
                                    {{ item.title }}
                                </a>
                                <div
                                    class="cart-wrapper--content__main-item_left_product-description"
                                >
                                    {{ item.description }}
                                </div>
                            </div>
                            <div
                                class="cart-wrapper--content__main-item_left-option"
                            >
                                <span
                                    class="cart-wrapper--content__main-item_left-option-qty"
                                >
                                    Qty: {{ item.qty }}
                                </span>
                                <button
                                    class="cart-wrapper--content__main-item_left-option-qty__minus"
                                    @click="item.qty > 1 && (item.qty -= 1)"
                                >
                                    <img
                                        width="20"
                                        src="../assets/images/minus-svgrepo-com.svg"
                                    />
                                </button>
                                <button
                                    class="cart-wrapper--content__main-item_left-option-qty__plus"
                                    @click="item.qty += 1"
                                >
                                    <img
                                        width="20"
                                        src="../assets/images/plus-svgrepo-com.svg"
                                    />
                                </button>
                                <span
                                    class="cart-wrapper--content__main-item_left-option-price"
                                >
                                    ${{ item.qty * item.price }}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="cart-wrapper--content__main-item_action">
                        <button
                            class="modal--cart-wrapper__content--item-action-removed"
                            @click="cart.removeItem(item)"
                        >
                            <img
                                src="../assets/images/delete-svgrepo-com.svg"
                                width="20"
                            />
                        </button>
                    </div>
                </div>
                <div class="cart-wrapper--content__main-item_left-action">
                    <a
                        href="/category"
                        class="cart-wrapper--content__main-item_left-action-continueshopping button"
                    >
                        Continue Shopping
                    </a>
                    <button
                        class="cart-wrapper--content__main-item_left-action-updatecart button"
                        @click="cart.updateCartListItem(cart.cartListItems)"
                    >
                        Update cart
                    </button>
                </div>
                <div
                    class="cart-wrapper--content-empty"
                    v-if="cart.cartListItems.length == 0"
                >
                    Your cart is empty
                </div>
            </div>
            <div class="cart-wrapper--content__total">
                <h1>Summary</h1>
                <small>
                    You have {{ cart.cartListItems.length }} items in your cart
                </small>
                <ul class="cart-wrapper--content__total-detail">
                    <li>
                        <span
                            class="cart-wrapper--content__total-detail--label"
                        >
                            Order Subtotal
                        </span>
                        <span
                            class="cart-wrapper--content__total-detail--value"
                        >
                            ${{ cart.totalCartPrice }}
                        </span>
                    </li>
                    <li>
                        <span
                            class="cart-wrapper--content__total-detail--label"
                        >
                            Shipping Fee
                        </span>
                        <span
                            class="cart-wrapper--content__total-detail--value"
                        >
                            $5
                        </span>
                    </li>
                    <li>
                        <span
                            class="cart-wrapper--content__total-detail--label"
                        >
                            Tax
                        </span>
                        <span
                            class="cart-wrapper--content__total-detail--value"
                        >
                            $15
                        </span>
                    </li>
                    <li class="cart-wrapper--content__total-redeemp-coupon">
                        <span
                            class="cart-wrapper--content__total-detail--label"
                        >
                            Discount coupon code
                        </span>
                        <input placeholder="Your coupon code" />
                        <button
                            class="cart-wrapper--content__total-redeemp-coupon-button button"
                        >
                            Apply coupon code
                        </button>
                    </li>
                </ul>
                <div class="cart-wrapper--content__total-price">
                    <div class="cart-wrapper--content__total-price-label">
                        Order total:
                    </div>
                    <div class="cart-wrapper--content__total-price-value">
                        ${{
                            cart.totalCartPrice - 5 + 15 < 0
                                ? 0
                                : cart.totalCartPrice - 5 + 15
                        }}
                    </div>
                </div>
                <div class="cart-wrapper--content__total-action">
                    <a
                        href="/checkout"
                        class="cart-wrapper--content__total-action__checkout button"
                    >
                        Checkout
                    </a>
                </div>
                <PaymentMethodsComponent />
            </div>
            <div
                class="cart-wrapper--content-overlayloading"
                v-if="cart.isLoadingAddtoCart"
            >
                <img src="../assets/images/loading-black.svg" />
            </div>
        </div>
    </div>
</template>
<style lang="scss">
@import '@/assets/mixins.scss';
.cart-wrapper {
    max-width: var(--main-layout-max-width);
    margin: 20px auto;
    width: 100%;
    height: auto;
    border-radius: 7px;
    background-color: #fff;
    &--content {
        @include flex-container($align: flex-start);
        &__main {
            margin-top: 20px;
            width: 850px;
            @include flex-container($align: flex-start, $justify: flex-start);
            @include flex-container(
                $align: flex-start,
                $justify: flex-start,
                $dir: row
            );
            &-item {
                @include flex-container($align: center);
                width: 100%;
                margin-bottom: 35px;
                &_left {
                    @include flex-container(
                        $align: flex-start,
                        $justify: flex-start
                    );
                    &-thumbnail {
                        margin-right: 25px;
                        img {
                            border-radius: 3px;
                        }
                    }
                    &-detail {
                        width: 520px;
                        overflow: hidden;
                        &_title {
                            font-size: var(--font-xl);
                            a {
                                text-decoration: none;
                                color: #000;
                            }
                        }
                    }
                    &-option {
                        font-size: var(--font-m);
                        color: var(--vt-c-text-light-2);
                        @include flex-container(
                            $align: center,
                            $justify: flex-start
                        );
                        margin-top: 10px;
                        &-price {
                            margin-left: 20px;
                            color: var(--color-red);
                            font-weight: 500;
                            font-size: var(--font-l);
                        }
                        &-qty {
                            margin-right: 20px;
                            &__plus,
                            &__minus {
                                padding: 0 2px;
                                display: inline-block;
                                vertical-align: middle;
                            }
                        }
                    }
                    &_product-description {
                        font-size: 14px;
                        color: var(--vt-c-indigo);
                    }
                    &-action {
                        @include flex-container($align: center);
                        width: 100%;
                        padding-top: 20px;
                        border-top: 1px solid var(--vt-c-divider-light-2);
                        &-updatecart {
                            min-width: 140px;
                            @include buttonSecondary();
                        }
                        &-continueshopping {
                            @include buttonPrimary();
                            min-width: 140px;
                        }
                    }
                }
                &-action {
                    &-removed {
                        padding: 0;
                    }
                }
            }
        }
        &__total {
            position: relative;
            width: calc(100% - 900px);
            @include flex-container(
                $dir: column,
                $justify: center,
                $align: flex-start
            );
            h1 {
                font-size: 22px;
                font-weight: 500;
                color: var(--button-main-background-color);
            }
            &-title {
                color: var(--button-main-background-color-hover);
            }
            &-detail {
                width: 100%;
                margin: 10px 0;
                border-radius: 5px;
                color: #000;
                li {
                    @include flex-container($align: center);
                    margin: 5px 0;
                    &.cart-wrapper--content__total-redeemp-coupon {
                        margin-top: 20px;
                        input {
                            margin: 10px 0;
                        }
                    }
                }
                &--label {
                    font-weight: 500;
                }
            }
            &-price {
                width: 100%;
                @include flex-container($align: center);
                &-label,
                &-value {
                    font-weight: 500;
                    font-size: 22px;
                }
                &-value {
                    color: var(--color-red);
                }
            }
            &-action {
                width: 100%;
                margin-top: 20px;
                &__checkout {
                    width: 100%;
                    font-size: var(--font-l);
                    @include buttonPrimary();
                }
            }
            &-redeemp-coupon {
                margin-top: 20px;
                width: 100%;
                h4 {
                    font-size: 22px;
                    font-weight: 500;
                    margin-bottom: 10px;
                    color: var(--button-secondary-background-color);
                }
                input {
                    width: 100%;
                }
                &-button {
                    @include buttonSecondary();
                    width: 100%;
                    margin-top: 5px;
                }
            }
        }
        &-overlayloading {
            @include overlayLoadingBlack();
        }
        &-empty {
            text-align: center;
            width: 100%;
            height: 100%;
            @include flex-container($align: center, $justify: center);
        }
    }
    .product--detail-content__service_payment-methods {
        width: 100%;
        h4 {
            display: none;
        }
        ul {
            @include flex-container($align: center, $justify: flex-end);
            li {
                margin: 0 7px;
            }
        }
    }
}
</style>

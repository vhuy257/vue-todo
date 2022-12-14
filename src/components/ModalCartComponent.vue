<script lang="ts">
import { useCartStore } from '@/stores/cart';
import { useModalStore } from '@/stores/modal';

export default {
    setup() {
        const cart = useCartStore();
        const modal = useModalStore();
        cart.getCartListItems();
        cart.updateTotalPriceCart();

        return {
            cart,
            modal
        };
    },
    directives: {}
};
</script>
<template>
    <div
        class="modal--cart-wrapper"
        :class="{ active: modal.showModal === true }"
    >
        <div class="modal--cart-wrapper__header">
            <span class="modal--cart-wrapper__header-title">
                Your cart items
            </span>
            <button @click="modal.showHideModal(false)">
                <img src="../assets/images/close-svgrepo-com.svg" width="20" />
            </button>
        </div>
        <div class="modal--cart-wrapper__main">
            <div class="modal--cart-wrapper__content">
                <div
                    v-for="item in cart.cartListItems"
                    :key="item.id"
                    class="modal--cart-wrapper__content--item"
                >
                    <div class="modal--cart-wrapper__content--item-thumbnail">
                        <img :src="item.thumbnail" width="60" />
                    </div>
                    <div class="modal--cart-wrapper__content--item-detail">
                        <div
                            class="modal--cart-wrapper__content--item-detail_title"
                        >
                            <a
                                :href="'/product/' + item.id"
                                class="item--wrapper-content__product-name"
                            >
                                {{ item.title }}
                            </a>
                        </div>
                        <div
                            class="modal--cart-wrapper__content--item-detail_option"
                        >
                            <span
                                class="modal--cart-wrapper__content--item-detail_option-qty"
                            >
                                Qty: {{ item.qty }}
                            </span>
                            <span
                                class="modal--cart-wrapper__content--item-detail_option-price"
                            >
                                ${{ item.qty * item.price }}
                            </span>
                        </div>
                    </div>
                    <div class="modal--cart-wrapper__content--item-action">
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
                <div
                    class="modal--cart-wrapper__content--empty"
                    v-if="cart.cartListItems.length == 0"
                >
                    Your cart is empty
                </div>
            </div>
            <div class="modal--cart-wrapper__total">
                <h3 class="modal--cart-wrapper__total-title">Your cart</h3>
                <small>{{ cart.cartListItems.length }} items</small>
                <ul class="modal--cart-wrapper__total-detail">
                    <li>
                        <span class="modal--cart-wrapper__total-detail--label">
                            Total price:
                        </span>
                        <span class="modal--cart-wrapper__total-detail--value">
                            ${{ cart.totalCartPrice }}
                        </span>
                    </li>
                    <li>
                        <span class="modal--cart-wrapper__total-detail--label">
                            Shipping fee:
                        </span>
                        <span class="modal--cart-wrapper__total-detail--value">
                            $5
                        </span>
                    </li>
                </ul>
                <div class="modal--cart-wrapper__total-price">
                    <div class="modal--cart-wrapper__total-price-label">
                        Total:
                    </div>
                    <div class="modal--cart-wrapper__total-price-value">
                        ${{ cart.totalCartPrice - 5 }}
                    </div>
                </div>
                <div class="modal--cart-wrapper__total-action">
                    <a
                        href="/cart"
                        class="modal--cart-wrapper__total-action__viewcart button"
                    >
                        View Cart
                    </a>
                    <a
                        href="/checkout"
                        class="modal--cart-wrapper__total-action__checkout button"
                    >
                        Checkout
                    </a>
                </div>
            </div>
            <div
                class="modal--cart-wrapper__content--overlayloading"
                v-if="cart.isLoadingAddtoCart"
            >
                <img src="../assets/images/loading-black.svg" />
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import '@/assets/mixins.scss';
.modal--cart-wrapper {
    position: absolute;
    top: 100%;
    right: 0;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
    width: 800px;
    height: 390px;
    border-radius: 7px;
    background-color: #fff;
    padding: 10px 30px;
    transition: all 0.2s ease-in-out;
    transform: translateY(40px);
    opacity: 0;
    visibility: hidden;
    &.active {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    }

    &__main {
        @include flex-container($align: flex-start, $justify: flex-start);
    }
    &__content {
        margin-top: 20px;
        width: 450px;
        max-height: 300px;
        overflow-y: auto;
        @include flex-container($align: flex-start, $justify: flex-start);
        @include scrollbars(5px, slategray);
        &--item {
            @include flex-container($align: flex-end, $justify: flex-start);
            margin-bottom: 20px;
            &-thumbnail {
                margin-right: 15px;
                img {
                    border-radius: 3px;
                }
            }
            &-detail {
                width: 320px;
                overflow: hidden;
                &_title {
                    font-size: var(--font-l);
                    font-weight: 500;
                    a {
                        text-decoration: none;
                        color: #333;
                    }
                }
                &_option {
                    font-size: var(--font-m);
                    color: var(--vt-c-text-light-2);
                    &-price {
                        margin-left: 20px;
                        color: var(--color-red);
                    }
                }
            }
            &-action {
                &-removed {
                    padding: 0;
                }
            }
        }
        &--overlayloading {
            @include overlayLoadingBlack();
        }
        &--empty {
            text-align: center;
            width: 100%;
            height: 100%;
            @include flex-container($align: center, $justify: center);
        }
    }
    &__header {
        @include flex-container($align: center);
        border-bottom: 1px solid var(--vt-c-text-dark-2);
        &-title {
            font-size: 22px;
            padding: 5px 0;
        }
    }
    &__total {
        position: relative;
        width: calc(100% - 480px);
        margin-top: 20px;
        margin-left: 30px;
        @include flex-container(
            $dir: column,
            $justify: center,
            $align: flex-start
        );
        &-title {
            color: var(--button-main-background-color-hover);
        }
        &-detail {
            width: 100%;
            margin: 10px 0;
            background: #f9f9f9;
            padding: 0 10px;
            border-radius: 5px;
            font-size: 14px;
            color: #555;
            li {
                @include flex-container($align: center);
                margin: 5px 0;
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
            &__viewcart {
                width: 100%;
                margin: 10px 0;
                @include buttonPrimary();
            }
            &__checkout {
                width: 100%;
                @include buttonSecondary();
            }
        }
        &--overlayloading {
            @include overlayLoadingBlack();
        }
    }
}
</style>

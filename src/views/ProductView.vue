<script lang="ts">
import { useRoute } from 'vue-router';
import { useCategoryStore } from '@/stores/category';
import { useCartStore } from '@/stores/cart';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

//Vue carousel
import 'vue3-carousel/dist/carousel.css';
import AddtoCart from '@/components/AddToCart/AddToCart.vue';
import RecommendProductComponent from '@/components/RecommendProductComponent.vue';
import PaymentMethodsComponent from '@/components/PaymentMethodsComponent.vue';
import CustomerServiceCompnent from '@/components/CustomerServiceComponent.vue';

export default {
    setup() {
        const route = useRoute();
        const category = useCategoryStore();
        const cart = useCartStore();
        cart.isLoadingAddtoCart = false;
        const productId = route.params.id as string;

        category.getProduct(productId);

        return {
            category,
            cart
        };
    },
    components: {
        Carousel,
        Slide,
        Navigation,
        AddtoCart,
        RecommendProductComponent,
        PaymentMethodsComponent,
        CustomerServiceCompnent
    }
};
</script>

<template>
    <div class="product--detail-loading" v-if="category.isLoading">
        <img src="../assets/images/loading-black.svg" />
    </div>
    <div class="product--detail" v-if="!category.isLoading">
        <div
            class="product--detail-slider"
            v-if="category.product.images && category.product.images.length > 1"
        >
            <carousel :wrapAround="true">
                <slide v-for="slide in category.product.images" :key="slide">
                    <div class="carousel__item">
                        <img :src="slide" />
                    </div>
                </slide>
                <template #addons>
                    <navigation />
                </template>
            </carousel>
        </div>
        <div
            class="product--detail-slider_single"
            v-if="
                category.product.images && category.product.images.length === 1
            "
        >
            <img
                :src="category.product.images[0]"
                class="product--detail-slider_single-image"
            />
        </div>
        <div class="product--detail-content">
            <h1>{{ category.product.title }}</h1>
            <div class="product--detail-content__brand">
                <small class="product--detail-content__branditem">
                    {{ category.product.brand }}
                </small>
            </div>
            <small>Stock: {{ category.product.stock }}</small>
            <div class="product--detail-content__description">
                {{ category.product.description }}
            </div>
            <div class="product--detail-content__option">
                <h2 class="product--detail-content__option-price">
                    ${{ category.product.price }}
                </h2>
                <div class="product--detail-content__option-qty">
                    <button
                        class="product--detail-content_btn__minus"
                        @click="
                            category.product.qty > 1 &&
                                (category.product.qty -= 1)
                        "
                    >
                        <img src="../assets/images/minus-svgrepo-com.svg" />
                    </button>
                    <input
                        type="text"
                        name="product--qty"
                        id="product--qty"
                        :value="category.product.qty"
                    />
                    <button
                        class="product--detail-content_btn__plus"
                        @click="category.product.qty += 1"
                    >
                        <img src="../assets/images/plus-svgrepo-com.svg" />
                    </button>
                </div>
            </div>
            <div class="product--detail-content__action main">
                <AddtoCart
                    :item="category.product"
                    class="product--detail-content__action-button button"
                />
            </div>
            <div class="product--detail-content__service">
                <CustomerServiceCompnent />
                <PaymentMethodsComponent />
            </div>
        </div>
    </div>
    <RecommendProductComponent />
</template>

<style lang="scss">
@import '@/assets/mixins.scss';
.product--detail {
    max-width: var(--main-layout-max-width);
    margin: 0 auto;
    display: grid;
    grid-gap: 50px;
    grid-template-columns: 800px auto;

    &-loading {
        @include flex-container($align: center, $justify: center);
        height: 100vh;
    }

    &-content {
        &__option {
            margin-top: 20px;
            background-color: var(--color-background-soft);
            border-radius: 3px;
            padding: 7px 20px;
            @include flex-container($align: center);
            &-price {
                font-size: 32px;
                color: var(--color-red);
            }
            &-qty {
                @include flex-container($align: center);
                width: 150px;
                input {
                    width: 80px;
                    text-align: center;
                    border-color: var(--vt-c-black-mute);
                }
                button {
                    width: 25px;
                    padding: 0;
                    &:first-child {
                        margin-left: 0;
                    }
                }
            }
        }
        &__description {
            color: var(--vt-c-text-dark);
            margin-top: 15px;
        }
        &__border {
            height: 1px;
            width: 100%;
            background-color: var(--vt-c-white-soft);
            margin-top: 40px;
            margin-bottom: 40px;
        }
        &__branditem {
            background-color: var(--button-main-background-color);
            color: #fff;
            border-radius: 2px;
            padding: 3px 7px;
        }
        &__action {
            width: 100%;
            &-button {
                @include flex-container($align: center, $justify: center);
                @include buttonPrimary();
                font-size: var(--font-l);
                padding: 9px 12px;
                margin-top: 25px;
                width: 100%;
                &::after {
                    content: '';
                    background-image: url('../assets/images/cart-add-svgrepo-com-white.svg');
                    display: inline-block;
                    vertical-align: middle;
                    width: 24px;
                    height: 24px;
                    margin-left: 5px;
                }
            }
        }
        &__service {
            margin-top: 15px;
            @include flex-container($align: flex-start);
            li {
                margin: 10px 0;
                a {
                    @include flex-container(
                        $align: center,
                        $justify: flex-start
                    );
                    font-size: var(--font-m);
                    color: var(--vt-c-text-dark);
                    img {
                        margin-right: 10px;
                    }
                }
            }
            &_payment-methods {
                h4 {
                    font-size: var(--font-m);
                    font-weight: 500;
                    margin-top: 10px;
                    text-decoration: underline;
                }
                ul {
                    @include flex-container($align: center, $justify: flex-end);
                    li {
                        margin: 0 5px;
                    }
                }
            }
        }
    }
    &-slider_single {
        @include flex-container($align: center, $justify: center);
        &-image {
            margin: 0 auto;
            max-width: 220px;
            border-radius: 8px;
        }
    }
}
</style>

<script lang="ts">
import { useRoute } from 'vue-router';
import { useCounterStore } from '@/stores/category';
//Vue carousel
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

export default {
    setup() {
        const route = useRoute();
        const category = useCounterStore();
        const productId = route.params.id as string;

        category.getProduct(productId);

        return {
            category
        };
    },
    components: {
        Carousel,
        Slide,
        Navigation
    }
};
</script>

<template>
    <div class="product--loading" v-if="category.isLoading">Loading...</div>
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
                class="product--detail-slider__single"
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
                    <button class="product--detail-content_btn__minus">
                        <img src="../assets/images/minus-svgrepo-com.svg" />
                    </button>
                    <input
                        type="text"
                        name="product--qty"
                        id="product--qty"
                        value="1"
                    />
                    <button class="product--detail-content_btn__plus">
                        <img src="../assets/images/plus-svgrepo-com.svg" />
                    </button>
                </div>
            </div>
            <div class="product--detail-content__action button main">
                <button>Add to Cart</button>
            </div>
            <div class="product--detail-content__service">
                <ul>
                    <li>
                        <a href="#">
                            <img src="../assets/images/shipped.png" />
                            Free shipping
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../assets/images/refund.png" />
                            Refund service
                        </a>
                    </li>
                </ul>
                <div class="product--detail-content__service_payment-methods">
                    <h4>Accept payment methods</h4>
                    <ul>
                        <li>
                            <img
                                src="../assets/images/paypal.svg"
                                width="45"
                                height="45"
                            />
                        </li>
                        <li>
                            <img
                                src="../assets/images/visa-credit-card.svg"
                                width="30"
                            />
                        </li>
                        <li>
                            <img
                                src="../assets/images/mastercard.svg"
                                width="30"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="product--detail-recommend__section" v-if="!category.isLoading">
        <h1 class="product--detail-recommend__section-title">
            You may also like
        </h1>
        <div class="product--detail-recommend__section-slider">
            <carousel :itemsToShow="4">
                <slide
                    v-for="slide in category.productByCategory.products"
                    :key="slide"
                >
                    <div class="carousel__item">
                        <div class="carousel__item-image">
                            <a :href="'/product/' + slide.id">
                                <img :src="slide.thumbnail" />
                            </a>
                        </div>
                        <div class="carousel__item-productname">
                            <a
                                :href="'/product/' + slide.id"
                                :title="slide.title"
                            >
                                {{ slide.title }}
                            </a>
                        </div>
                        <div class="carousel__item-productprice">
                            <small>${{ slide.price }}</small>
                        </div>
                        <div class="carousel__item-productaction">
                            <button
                                class="carousel__item-productaction__addtocart"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </slide>
                <template #addons>
                    <navigation />
                </template>
            </carousel>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/mixins.scss';
.product--loading {
    @include flex-container($align: center, $justify: center);
    height: 100vh;
}
.product--detail-slider_single {
    @include flex-container($align: center, $justify: center);
}
.product--detail {
    max-width: 1440px;
    margin: 0 auto;
    display: grid;
    grid-gap: 50px;
    grid-template-columns: 800px auto;

    &-content {
        &__option {
            margin-top: 20px;
            padding-top: 20px;
            background-color: var(--color-background-soft);
            border-radius: 3px;
            padding: 20px;
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
            border-radius: 5px;
            padding: 3px 7px;
        }
        &__action button {
            @include flex-container($align: center, $justify: center);
            border-radius: 2px;
            font-weight: 400;
            font-size: var(--font-l);
            padding: 9px 12px;
            margin-top: 25px;
            border: 1px solid var(--button-main-background-color);
            background-color: var(--button-main-background-color);
            text-align: center;
            color: #fff;
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
            &:hover {
                background-color: var(--button-main-background-color-hover);
                border-color: var(--button-main-background-color-hover);
                color: #fff;
                &::after {
                    content: '';
                    background-image: url('../assets/images/cart-add-svgrepo-com-white.svg');
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
}
.product--detail-slider__single {
    margin: 0 auto;
    max-width: 220px;
    border-radius: 8px;
}
.carousel__item {
    min-height: 200px;
    width: 100%;
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.carousel__item img {
    max-height: 300px;
    border-radius: 5px;
    width: auto;
    display: block;
}
.carousel__slide,
.carousel__track {
    border-radius: 8px;
}
.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
}
.product--detail-recommend__section {
    border-top: 1px solid var(--color-background-mute);
    max-width: 1000px;
    margin: 50px auto 0;

    &-title {
        text-align: center;
        margin: 30px auto 40px;
    }

    .carousel__item {
        color: #000;
        flex-direction: column;
        margin: 0 10px;
        &-image {
            max-width: 250px;
            margin-bottom: 10px;
            img {
                height: 150px;
                max-width: 100%;
                display: block;
                border-radius: 5px;
            }
        }
        &-productname {
            font-size: var(--font-l);
            margin-top: auto;
            a {
                margin: 0 auto;
                text-decoration: none;
                color: var(--vt-c-text-dark);
            }
        }
        &-productprice {
            color: var(--color-red);
        }
        &-productaction {
            &__addtocart {
                background-color: var(--button-main-background-color);
                color: #fff;
                border-radius: 3px;
                padding: 3px 7px;

                &:hover {
                    background-color: var(--button-main-background-color-hover);
                }
            }
        }
    }
}
</style>

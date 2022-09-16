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
    <div class="product--detail">
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
            class="product--detail-slider"
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
            <h2 class="product--detail-content__price">
                ${{ category.product.price }}
            </h2>
            <div class="product--detail-content__action button main">
                <button>Add to Cart</button>
            </div>
        </div>
    </div>
    <div class="product--detail-recommend__section">
        <h1 class="product--detail-recommend__section-title">
            You will also like this
        </h1>
        <div class="product--detail-recommend__section-slider">
            <carousel :itemsToShow="4" :wrapAround="true">
                <slide
                    v-for="slide in category.productByCategory.products"
                    :key="slide"
                >
                    <div class="carousel__item">
                        <div class="carousel__item-image">
                            <img :src="slide.thumbnail" />
                        </div>
                        <div class="carousel__item-productprice">
                            <small>${{ slide.price }}</small>
                        </div>
                        <div class="carousel__item-productname">
                            {{ slide.title }}
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

.product--detail {
    max-width: 1440px;
    margin: 0 auto;
    display: grid;
    grid-gap: 50px;
    grid-template-columns: 700px auto;

    &-content {
        &__description {
            color: var(--vt-c-text-dark);
            margin-top: 15px;
        }
        &__price {
            font-size: 32px;
            color: var(--color-red);
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
.product--detail-content {
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
        @include flex-container($align: center);
        border-radius: 2px;
        font-weight: 400;
        font-size: 14px;
        padding: 5px 12px;
        margin-top: 25px;
        border: 1px solid var(--button-main-background-color-hover);
        &::after {
            content: '';
            background-image: url('../assets/images/cart-add-svgrepo-com.svg');
            display: inline-block;
            vertical-align: middle;
            width: 24px;
            height: 24px;
            margin-left: 5px;
        }
        &:hover {
            background-color: var(--background-green);
            border-color: var(--background-green);
            color: #fff;
            &::after {
                content: '';
                background-image: url('../assets/images/cart-add-svgrepo-com-white.svg');
            }
        }
    }
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
        }
    }
}
</style>

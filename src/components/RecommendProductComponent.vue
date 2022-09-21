<script lang="ts">
import { useCategoryStore } from '@/stores/category';
import AddtoCart from '@/components/AddToCart/AddToCart.vue';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

export default {
    setup() {
        const category = useCategoryStore();
        return {
            category
        };
    },
    components: {
        Carousel,
        Slide,
        Navigation,
        AddtoCart
    }
};
</script>
<template>
    <div class="product--detail-recommend__section" v-if="!category.isLoading">
        <h1 class="product--detail-recommend__section-title">
            You may also like
        </h1>
        <div class="product--detail-recommend__section-slider">
            <carousel :itemsToShow="3">
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
                            <AddtoCart :item="slide" />
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
    &-recommend__section {
        border-top: 1px solid var(--color-background-mute);
        max-width: 800px;
        margin: 50px auto 40px;
        &-title {
            text-align: center;
            margin: 30px auto 40px;
        }
        .carousel__item {
            color: #000;
            flex-direction: column;
            margin: 0 10px;
            min-height: 200px;
            width: 100%;
            color: var(--vc-clr-white);
            font-size: 20px;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            &-image {
                max-width: 250px;
                margin-bottom: 10px;
                max-height: 300px;
                border-radius: 5px;
                width: auto;
                display: block;
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
                    color: var(--vt-c-black);
                }
            }
            &-productprice {
                color: var(--color-red);
            }
            &-productaction {
                button {
                    @include buttonPrimary();
                    padding: 3px 7px;
                }
            }
        }

        .carousel__track {
            border-radius: 8px;
        }
        .carousel__prev,
        .carousel__next {
            box-sizing: content-box;
            border: 5px solid white;
        }
    }
}
</style>

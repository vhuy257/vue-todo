<script lang="ts">
import { useCartStore } from '@/stores/cart';

export default {
    props: ['item'],
    setup() {
        const cart = useCartStore();
        return {
            cart
        };
    }
};
</script>

<template>
    <button
        :disabled="!item.isAddedtoCart && item.isLoadingAddtoCart"
        class="item--wrapper-content__action-addtocart"
        @click="cart.addProductToCartAction(item)"
    >
        <span v-if="!item.isAddedtoCart && !item.isLoadingAddtoCart">
            Add to Cart
        </span>
        <span v-if="!item.isAddedtoCart && item.isLoadingAddtoCart">
            Adding...
        </span>
        <span v-if="item.isAddedtoCart && !item.isLoadingAddtoCart">
            Added
        </span>
    </button>
</template>

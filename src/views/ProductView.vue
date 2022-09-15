<script lang="ts">
//import { useRoute } from 'vue-router';
import { useRoute } from 'vue-router';
import { getDetailProduct } from '@/service/getFakeProduct';

export default {
    setup() {
        const route = useRoute();
        const product = {};

        return {
            route,
            product
        };
    },
    methods: {
        async LoadDetail(productId: string) {
            const res = await getDetailProduct(productId);
            this.product = res.data;
        }
    },
    created() {
        this.LoadDetail(this.route.params.id);
    }
};
</script>

<template>
    <h1>Product detail {{ product.title }}</h1>
</template>

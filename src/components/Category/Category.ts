import { useCategoryStore } from '@/stores/category';
import PaginationComponent from '@/components/PaginationComponent.vue';
import ProductPerPageComponent from '@/components/ProductPerPageComponent.vue';
import AddtoCart from '@/components/AddToCart/AddToCart.vue';
import { useCartStore } from '@/stores/cart';

export default {
    setup() {
        const category = useCategoryStore();
        const cart = useCartStore();
        category.getListProduct(1);
        category.getAllCategories();

        return {
            category,
            cart
        };
    },
    components: {
        PaginationComponent,
        ProductPerPageComponent,
        AddtoCart
    }
};

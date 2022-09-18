import { useCounterStore } from '@/stores/category';
import PaginationComponent from '@/components/PaginationComponent.vue';

export default {
    setup() {
        const list = useCounterStore();
        list.getListProduct(1);
        list.getAllCategories();

        return { list };
    },
    components: {
        PaginationComponent
    }
};

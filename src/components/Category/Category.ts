import { useCounterStore } from '@/stores/category';
import PaginationComponent from '@/components/PaginationComponent.vue';

export default {
    setup() {
        const list = useCounterStore();
        list.getListProduct(1);
        list.getAllCategories();
        const activeCategory = '';

        return {
            list,
            activeCategory
        };
    },
    methods: {
        getProductByCategory(item: string) {
            this.activeCategory = item;
            if (item !== 'All') {
                return this.list.getProductByCategory(item);
            }
            return this.list.getListProduct(1);
        }
    },
    components: {
        PaginationComponent
    }
};

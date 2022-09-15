import { useCounterStore } from '@/stores/category';

export default {
    setup() {
        const list = useCounterStore();
        list.getListProduct();

        return { list };
    }
};

import { useCounterStore } from '@/stores/task';

export default {
    setup() {
        const task = useCounterStore();
        task.getListProduct();

        return { task };
    }
};

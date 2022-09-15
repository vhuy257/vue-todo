import { defineStore } from 'pinia';
import { getList } from '@/service/getFakeProduct';

export interface Task {
    id?: string;
    name?: string;
    image?: string[];
}

export const useCounterStore = defineStore({
    id: 'task',
    state: () => ({
        message: '' as string,
        isLoading: true as boolean,
        list: [] as Task[]
    }),
    actions: {
        async getListProduct() {
            const { data } = await getList();
            this.isLoading = false;
            this.list = data;
        }
    }
});

import { defineStore } from 'pinia';
import {
    getList,
    getDetailProduct,
    getProductByCategory
} from '@/service/getFakeProduct';

export interface Product {
    id?: string;
    title?: string;
    category?: string;
    images?: string[];
}

export const useCounterStore = defineStore({
    id: 'category',
    state: () => ({
        message: '' as string,
        isLoading: true as boolean,
        product: {} as Product,
        productByCategory: [] as Product[],
        list: [] as Product[]
    }),
    actions: {
        async getListProduct() {
            const { data } = await getList(16, 15);
            this.isLoading = false;
            this.list = data;
        },
        async getProduct(productId: string) {
            const { data } = await getDetailProduct(productId);
            this.product = data;
            const category = this.product.category as string;
            const dataRes = await getProductByCategory(category);
            this.productByCategory = dataRes.data;
        }
    }
});

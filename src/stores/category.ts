import { defineStore } from 'pinia';
import {
    getList,
    getDetailProduct,
    getProductByCategory,
    getProductCategories
} from '@/service/category';
import { PRODUCT_PER_PAGE } from '@/config/config';
import type { Product } from '@/model/product';

export const useCategoryStore = defineStore({
    id: 'category',
    state: () => ({
        message: '' as string,
        isLoading: true as boolean,
        product: {} as Product,
        totalPage: 0 as number,
        limitProduct: PRODUCT_PER_PAGE as number,
        classActiveCategory: '' as string,
        currentPageNumber: 1 as number,
        productByCategory: [] as Product[],
        list: [] as Product[],
        listCategories: [] as string[]
    }),
    actions: {
        async getListProduct(pageItem: number, limit?: number) {
            if (pageItem < 1) {
                return false;
            }
            if (this.totalPage !== 0 && this.totalPage < pageItem) {
                return false;
            }
            this.isLoading = true;
            this.limitProduct = limit || PRODUCT_PER_PAGE;
            const { data } = await getList(
                this.limitProduct,
                (pageItem - 1) * PRODUCT_PER_PAGE
            );
            this.list = data;
            this.processPagination(data.total, pageItem);
        },
        processPagination(total: number, pageItem: number) {
            this.totalPage = Math.round(total / this.limitProduct);
            this.isLoading = false;
            this.currentPageNumber = pageItem;
        },
        async getAllCategories() {
            const { data } = await getProductCategories();
            this.listCategories = data;
        },
        async getProduct(productId: string) {
            this.isLoading = true;
            const { data } = await getDetailProduct(productId);
            this.product = data;
            this.product.qty = 1;
            this.isLoading = false;
            const category = this.product.category as string;
            const dataRes = await getProductByCategory(category);
            this.productByCategory = dataRes.data;
        },
        async getProductByCategory(categoryName: string) {
            const { data } = await getProductByCategory(categoryName);
            this.list = data;
            this.processPagination(data.total, this.currentPageNumber);
        },
        getProductEvent(categoryName: string) {
            if (categoryName === 'All') {
                this.getListProduct(1);
            } else {
                this.getProductByCategory(categoryName);
            }
            this.classActiveCategory = categoryName;
        }
    }
});

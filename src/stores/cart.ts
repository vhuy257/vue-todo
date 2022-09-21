import { defineStore } from 'pinia';
import type { Product } from '@/model/product';
import {
    addProductToCart,
    getProductsFromCart,
    removeItemFromCart
} from '@/service/cart';
import { useModalStore } from './modal';

export const useCartStore = defineStore({
    id: 'cart',
    state: () => ({
        cartListItems: [] as Product[],
        cartLength: 0 as number,
        totalCartPrice: 0 as number,
        productItemName: '' as string,
        isLoadingAddtoCart: false as boolean
    }),
    actions: {
        getCartLength() {
            const data =
                JSON.parse(localStorage.getItem('cart') as string) || [];
            this.cartLength = data.length;
        },
        getCartListItems() {
            this.cartListItems = getProductsFromCart();
        },
        updateTotalPriceCart() {
            this.cartListItems.map((item) => {
                item.totalPrice = item.qty * item.price;
            });

            this.totalCartPrice = this.cartListItems.reduce(
                (accumulator: number, curValue: Product) =>
                    accumulator + curValue.totalPrice,
                0
            );
        },
        addProductToCartAction(product: Product) {
            const modal = useModalStore();
            this.isLoadingAddtoCart = true;
            this.productItemName = product.title;
            product.isLoadingAddtoCart = true;
            addProductToCart(product);

            setTimeout(() => {
                //Show added to cart after 1s
                product.isAddedtoCart = true;
                product.isLoadingAddtoCart = false;
                this.isLoadingAddtoCart = false;
                modal.showHideModal(true);
                this.getCartLength();
                this.getCartListItems();
                this.updateTotalPriceCart();
            }, 1000);

            setTimeout(() => {
                //Hide added to cart after 3s
                product.isAddedtoCart = false;
            }, 3000);
        },
        removeItem(product: Product) {
            this.isLoadingAddtoCart = true;
            removeItemFromCart(product);
            setTimeout(() => {
                this.isLoadingAddtoCart = false;
                this.cartListItems = this.cartListItems.filter(
                    (item) => item.id !== product.id
                );
                this.updateTotalPriceCart();
            }, 1000);
        }
    }
});

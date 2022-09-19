import axios from 'axios';
import type { Product } from '@/model/product';

export const getList = (limit: number, skip: number) => {
    return axios.get(`
    https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
};

export const getDetailProduct = (productId: string) => {
    return axios.get('https://dummyjson.com/products/' + productId);
};

export const getProductCategories = () => {
    return axios.get('https://dummyjson.com/products/categories');
};

export const getProductByCategory = (category: string) => {
    return axios.get('https://dummyjson.com/products/category/' + category);
};

export const searchProduct = (productName: string) => {
    return axios.get('https://dummyjson.com/products/search?q=' + productName);
};

export const addProductToCart = (product: Product) => {
    const db = JSON.parse(localStorage.getItem('cart') as string) || [];
    const checkDuplicate = db.findIndex(
        (item: Product) => item.id === product.id
    );

    if (checkDuplicate === -1) {
        const updateQtyProduct = { ...product, qty: 1 };
        const newDb = [...db, updateQtyProduct];
        localStorage.setItem('cart', JSON.stringify(newDb));
    } else {
        const newDb = db;
        newDb[checkDuplicate].qty += 1;
        localStorage.setItem('cart', JSON.stringify(newDb));
    }
};

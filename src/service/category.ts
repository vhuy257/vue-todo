import axios from 'axios';

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

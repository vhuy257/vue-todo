import axios from 'axios';

export const getList = () => {
    return axios.get('https://dummyjson.com/products?limit=16');
};

export const getDetailProduct = (productId: number) => {
    return axios.get('https://dummyjson.com/products/' + productId);
};

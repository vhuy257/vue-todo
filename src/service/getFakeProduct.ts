import axios from 'axios';

export const getList = () => {
    return axios.get(
        'https://api.escuelajs.co/api/v1/products?offset=0&limit=12'
    );
};

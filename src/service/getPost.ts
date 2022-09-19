import axios from 'axios';

export const getAllPost = (limit: number, skip: number) => {
    return axios.get(`
    https://dummyjson.com/posts?limit=${limit}&skip=${skip}`);
};

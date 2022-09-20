import { defineStore } from 'pinia';
import { getAllPost } from '@/service/post';

export interface Post {
    id?: string;
    title?: string;
    category?: string;
    images?: string[];
}

export const usePostStore = defineStore({
    id: 'post',
    state: () => ({
        message: '' as string,
        isLoading: true as boolean,
        listPost: [] as Post[]
    }),
    actions: {
        async getListPost() {
            const { data } = await getAllPost(15, 0);
            this.listPost = data.posts;
        }
    }
});

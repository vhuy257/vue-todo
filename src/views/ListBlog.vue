<script lang="ts">
import { usePostStore } from '@/stores/post';
export default {
    setup() {
        const post = usePostStore();
        post.getListPost();

        return {
            post
        };
    }
};
</script>
<template>
    <div class="blog--wrapper">
        <div
            class="blog--wrapper-item"
            v-for="item in post.listPost"
            :key="item.id"
        >
            <div class="blog--wrapper-item__image">
                <img
                    src="../assets/images/newspaper-svgrepo-com.svg"
                    width="80"
                />
            </div>
            <div class="blog--wrapper-item__title">
                {{ item.title }}
            </div>
            <div class="blog--wrapper-item__description">
                {{ item.body }}
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.blog--wrapper {
    display: grid;
    max-width: 1440px;
    margin: 20px auto;
    grid-template-columns: auto auto auto auto;
    grid-gap: 50px;

    &-item__title {
        font-size: 18px;
        color: var(--button-main-background-color);
        margin-top: 20px;
        font-weight: 500;
    }

    &-item__image {
        text-align: center;
        img {
            margin: 0 auto;
        }
    }

    &-item__description {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        text-overflow: ellipsis;
        overflow: hidden;
        height: 70px;
        font-size: 14px;
        color: var(--vt-c-indigo);
    }
}
</style>

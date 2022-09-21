<script lang="ts">
import { useCategoryStore } from '@/stores/category';

export default {
    setup() {
        const category = useCategoryStore();

        return {
            category
        };
    }
};
</script>
<template>
    <div class="pagination" v-if="category.totalPage">
        <button
            class="pagination--item-prev"
            @click="
                category.getListProduct(
                    category.currentPageNumber - 1,
                    category.limitProduct
                )
            "
        >
            Previous
        </button>
        <ul>
            <li
                v-for="item in category.totalPage"
                :key="item"
                @click="category.getListProduct(item, category.limitProduct)"
                :class="{ active: item === category.currentPageNumber }"
            >
                <button>{{ item }}</button>
            </li>
        </ul>
        <button
            class="pagination--item-next"
            @click="
                category.getListProduct(
                    category.currentPageNumber + 1,
                    category.limitProduct
                )
            "
        >
            Next
        </button>
    </div>
</template>
<style lang="scss" scoped>
@import '../assets/mixins.scss';
.pagination {
    @include flex-container(
        $align: center,
        $dir: row,
        $justify: flex-end,
        $wrap: wrap
    );
    width: 100%;
    font-size: var(--font-m);

    &--item {
        &-prev,
        &-next {
            border: 1px solid var(--button-main-background-color);
            color: var(--button-main-background-color);
            border-radius: 3px;
            padding: 5px 13px;
            width: 80px;
            margin: 0 20px;
            &:hover {
                background-color: var(--button-main-background-color-hover);
                border-color: var(--button-main-background-color-hover);
                color: #fff;
            }
        }
        &-next {
            margin-right: 0;
        }
    }
    ul {
        @include flex-container(
            $align: center,
            $dir: row,
            $justify: flex-end,
            $wrap: wrap
        );
        li {
            margin: 0 10px;
            font-size: var(--font-m);
            button {
                color: var(--button-main-background-color);
                border: 1px solid var(--button-main-background-color);
                padding: 2px 8px;
                border-radius: 3px;
                &:hover {
                    border-color: var(--button-main-background-color-hover); 
                    background-color: var(--button-main-background-color-hover);
                    color: #fff;
                }
            }
            &.active {
                button {
                    background-color: var(--button-main-background-color-hover);
                    border-color: var(--button-main-background-color-hover);
                    color: #fff;
                }
            }
        }
    }
}
</style>

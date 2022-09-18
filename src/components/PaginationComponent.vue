<script lang="ts">
import { useCounterStore } from '@/stores/category';

export default {
    setup() {
        const list = useCounterStore();

        return {
            list
        };
    }
};
</script>
<template>
    <div class="pagination">
        <button
            class="pagination--item-prev"
            @click="list.getListProduct(list.currentPageNumber - 1)"
        >
            Previous
        </button>
        <ul>
            <li
                v-for="item in list.totalPage"
                :key="item"
                @click="list.getListProduct(item)"
                :class="{ active: item === list.currentPageNumber }"
            >
                <button>{{ item }}</button>
            </li>
        </ul>
        <button
            class="pagination--item-next"
            @click="list.getListProduct(list.currentPageNumber + 1)"
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
            border-radius: 3px;
            padding: 5px 13px;
            width: 80px;
            margin: 0 20px;
            &:hover {
                background-color: var(--button-main-background-color-hover);
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
                border: 1px solid var(--button-main-background-color);
                padding: 2px 8px;
                border-radius: 3px;
                &:hover {
                    background-color: var(--button-main-background-color-hover);
                    color: #fff;
                }
            }
            &.active {
                button {
                    background-color: var(--button-main-background-color-hover);
                    color: #fff;
                }
            }
        }
    }
}
</style>

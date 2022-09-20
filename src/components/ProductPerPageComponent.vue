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
    <div class="product--perpage">
        Product Per Page:
        <div class="product--perpage-option">
            <div class="product--perpage-option__selected">
                {{ category.limitProduct }}
            </div>
            <ul>
                <li
                    v-for="item in [10, 20, 40]"
                    :key="item"
                    @click="category.getListProduct(1, item)"
                >
                    {{ item }}
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import '@/assets/mixins.scss';
.product--perpage {
    @include flex-container($align: center);
    font-size: var(--font-m);
    position: relative;
    cursor: pointer;
    &:hover &-option {
        ul {
            display: block;
        }
    }
    &-option {
        min-width: 120px;
        margin-left: 15px;
        ul {
            width: 100%;
            margin-top: 15px;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
            border-radius: 5px;
            position: absolute;
            bottom: 20px;
            z-index: 9;
            background-color: #fff;
            display: none;
            li {
                padding: 5px 10px;
                cursor: pointer;
                border-radius: 5px;
                &:hover {
                    background-color: var(--button-main-background-color);
                    color: #fff;
                }
            }
        }
        &__selected {
            background-color: var(--vt-c-white-soft);
            padding: 5px 10px;
            border-radius: 5px;
        }
    }
}
</style>

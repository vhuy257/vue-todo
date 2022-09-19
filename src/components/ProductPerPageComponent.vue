<script lang="ts">
import { useCounterStore } from '@/stores/category';
import { PRODUCT_PER_PAGE } from '@/config/config';

export default {
    setup() {
        const list = useCounterStore();

        return {
            list,
            PRODUCT_PER_PAGE
        };
    }
}
</script>
<template>
    <div class="product--perpage">
        Product Per Page:
        <div class="product--perpage-option">
            <div class="product--perpage-option__selected">
                {{ PRODUCT_PER_PAGE }}
            </div>
            <ul>
                <li>10</li>
                <li>20</li>
                <li>40</li>
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
            bottom: 0;
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

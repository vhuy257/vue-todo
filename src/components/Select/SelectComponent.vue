<script lang="ts">
import { useAddressStore } from '@/stores/address';
import InputErrorComponent from '@/components/Input/InputErrorComponent.vue';

export default {
    setup() {
        const address = useAddressStore();

        return {
            address
        };
    },
    props: ['label', 'listValue', 'value', 'errorList'],
    components: { InputErrorComponent }
};
</script>
<template>
    <div class="select--field" :class="{ invalid: errorList.length > 0 }">
        <div class="select--field-label">{{ label }}</div>
        <div class="select--field-wrapper">
            <span class="select--field-wrapper_active">{{ value }}</span>
            <div class="select--field-wrapper_option">
                <div
                    class="select--field-wrapper_option-item"
                    v-for="item in listValue"
                    v-bind:key="item"
                    @click="address.updateValueInput('country', item.name)"
                >
                    {{ item.name }}
                </div>
            </div>
        </div>
        <InputErrorComponent :error="errorList" />
    </div>
</template>
<style lang="scss" scoped>
@import '@/assets/mixins.scss';
.select--field {
    min-width: 219px;
    margin: 10px 0 15px;
    position: relative;
    &-label {
        font-size: 14px;
        margin-bottom: 5px;
        color: #555;
        font-weight: 500;
    }
    &-select {
        width: 100%;
    }
    &-error {
        position: absolute;
        bottom: -25px;
        font-size: 12px;
        margin-top: 10px;
        color: var(--color-red);
    }
    &-wrapper {
        width: 100%;
        cursor: pointer;
        &_active {
            background-color: var(--vt-c-white-soft);
            font-size: 14px;
            padding: 7px 10px;
            width: 100%;
            display: block;
            border-radius: 5px;
        }
        &_option {
            position: absolute;
            background-color: #fff;
            z-index: 9;
            padding: 7px;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
            font-size: 14px;
            width: 100%;
            border-radius: 5px;
            visibility: hidden;
            max-height: 200px;
            overflow-y: auto;
            @include scrollbars(5px, slategray);
            &-item {
                padding: 5px 7px;
                border-radius: 5px;
                cursor: pointer;
                &:hover {
                    color: #fff;
                    background-color: var(--button-main-background-color);
                }
            }
        }
        &:hover {
            .select--field-wrapper_option {
                visibility: visible;
            }
        }
    }
    &.invalid {
        .select--field-wrapper_active {
            background-color: var(--background-input-invalid);
        }
    }
}
</style>

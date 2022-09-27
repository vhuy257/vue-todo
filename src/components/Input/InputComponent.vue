<!-- eslint-disable vue/no-mutating-props -->
<script lang="ts">
import { useAddressStore } from '@/stores/address';

export default {
    props: ['label', 'name', 'error', 'value'],
    methods: {
        onChange(val: string) {
            const useAddress = useAddressStore();
            useAddress.updateValueInput(val);
        }
    }
};
</script>
<template>
    <div class="input--field" :class="name">
        <div class="input--field-label">{{ label }} {{ value }}</div>
        <input
            class="input--field-input"
            type="text"
            v-model="value"
            v-on:change="onChange(value)"
        />
        <div class="input--field-error" v-if="error">
            <span v-if="error">
                {{ error }}
            </span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.input--field {
    margin: 10px 0 15px;
    position: relative;
    &-label {
        font-size: 14px;
        margin-bottom: 5px;
    }
    input {
        width: 100%;
    }
    &.street {
        width: 100%;
    }
    &-error {
        position: absolute;
        bottom: -25px;
        font-size: 12px;
        margin-top: 10px;
        color: var(--color-red);
    }
}
</style>

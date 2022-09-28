<!-- eslint-disable vue/no-mutating-props -->
<script lang="ts">
import { useAddressStore } from '@/stores/address';
import InputErrorComponent from './InputErrorComponent.vue';
export default {
    props: ['label', 'className', 'errorList', 'value', 'name'],
    methods: {
        onChange(name: string, val: string) {
            const useAddress = useAddressStore();
            useAddress.updateValueInput(name, val);
        }
    },
    components: { InputErrorComponent }
};
</script>
<template>
    <div class="input--field" :class="{ invalid: errorList.length > 0 }">
        <div class="input--field-label">{{ label }}</div>
        <input
            class="input--field-input"
            type="text"
            v-model="value"
            v-on:change="onChange(name, value)"
        />
        <InputErrorComponent :error="errorList" />
    </div>
</template>
<style lang="scss" scoped>
.input--field {
    margin: 10px 0 15px;
    position: relative;
    &-label {
        font-size: 14px;
        margin-bottom: 5px;
        color: #555;
        font-weight: 500;
    }
    input {
        width: 100%;
    }
    &.street {
        width: 100%;
    }
    &.invalid {
        input {
            background-color: var(--background-input-invalid);
        }
    }
}
</style>

<script lang="ts">
export default {
    props: ['label', 'error']
};
</script>
<template>
    <div class="select--field">
        <div class="select--field-label">{{ label }}</div>
        <select class="select--field-select">
            <option value="1">Viet Nam</option>
            <option value="2">American</option>
        </select>
        <div class="input--field-error" v-if="error">
            <span>
                {{ error }}
            </span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.select--field {
    min-width: 219px;
    margin: 10px 0 15px;
    position: relative;
    &-label {
        font-size: 14px;
        margin-bottom: 5px;
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
}
</style>

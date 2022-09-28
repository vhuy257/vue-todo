<script lang="ts">
export default {
    props: ['error', 'errorMsg']
};
</script>
<template>
    <div class="input--field-error" v-if="error.length > 0">
        <span v-if="error.length > 0">
            <span v-for="item in error" v-bind:key="item">
                {{ item }}
            </span>
        </span>
    </div>
</template>
<style lang="scss" scoped>
.input--field-error {
    position: absolute;
    bottom: -20px;
    font-size: 12px;
    color: var(--color-red);
}
</style>

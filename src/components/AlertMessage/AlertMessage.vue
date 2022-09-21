<script lang="ts">
export default {
    props: ['message']
};
</script>
<template>
    <div class="alert--message success">
        {{ message }}
    </div>
</template>
<style lang="scss" scoped>
@import '@/assets/mixins.scss';
.alert--message {
    max-width: 1440px;
    margin: 10px auto;
    &.success {
        @include message($type: 'success');
    }
}
</style>

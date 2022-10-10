<script lang="ts">
export default {};
</script>
<template>
    <div class="payment--methods-wrapper">
        <h2>Payments Methods</h2>
        <div class="payment--methods-wrapper__list">
            <div class="payment--methods-wrapper__list-item">
                <div class="payment--methods-wrapper__list-item_left">
                    <input
                        type="radio"
                        name="fav_language"
                        value="momo"
                        id="momo"
                    />
                    <label for="momo">MoMo</label>
                </div>
                <img src="../assets/images/momo.png" width="80" />
            </div>
            <div class="payment--methods-wrapper__list-item">
                <div class="payment--methods-wrapper__list-item_left">
                    <input
                        type="radio"
                        name="fav_language"
                        id="qrpay"
                        value="qrpay"
                    />
                    <label for="qrpay">Qr Pay</label>
                </div>
                <img src="../assets/images/qrcode-default.png" width="80" />
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import '@/assets/mixins.scss';
.payment--methods-wrapper {
    margin-top: 40px;
    &__list {
        margin-top: 25px;
        @include flex-container($align: center);
        &-item {
            @include flex-container($align: center);
            width: 48%;
            font-size: 12px;
            background: var(--vt-c-text-dark-2);
            padding: 7px 5px 7px 15px;
            border-radius: 5px;
            margin-bottom: 10px;
            img {
                width: 35px;
            }
            &_left {
                @include flex-container($align: center);
                input {
                    margin-right: 10px;
                }
            }
        }
    }
}
</style>

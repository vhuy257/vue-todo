<script lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { useCartStore } from '@/stores/cart';
import { useModalStore } from './stores/modal';

export default {
    setup() {
        const cart = useCartStore();
        const modal = useModalStore();
        cart.getCartLength();

        return {
            cart,
            modal,
            RouterLink,
            RouterView
        };
    }
};
</script>

<template>
    <header>
        <div class="wrapper">
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/category">Category</RouterLink>
                <RouterLink to="/blog">Blog</RouterLink>
            </nav>
            <div class="customer--wrapper">
                <div
                    class="customer--wrapper__cart"
                    @click="modal.showHideModal(true)"
                >
                    <img
                        src="./assets/images/cart-add-svgrepo-com.svg"
                        width="35"
                    />
                    <span class="customer--wrapper__cart--total">
                        <span v-if="cart.isLoadingAddtoCart">
                            <img src="./assets/images/loading.svg" width="17" />
                        </span>
                        <span v-if="!cart.isLoadingAddtoCart">
                            {{ cart.cartLength }}
                        </span>
                    </span>
                </div>
            </div>
        </div>
    </header>

    <RouterView />
</template>

<style lang="scss" scoped>
@import '@/assets/mixins.scss';
header {
    line-height: 1.5;
    max-height: 100vh;
    padding: 10px 0;
    margin-bottom: 40px;
    position: sticky;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9;
    background-color: #fff;
    .wrapper {
        @include flex-container($align: center);
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        .customer--wrapper {
            &__cart {
                position: relative;
                cursor: pointer;
                img {
                    display: inline-block;
                    vertical-align: bottom;
                }
                &--total {
                    background-color: var(--color-red);
                    color: #fff;
                    font-size: 12px;
                    display: inline-block;
                    vertical-align: bottom;
                    padding: 3px 7px;
                    border-radius: 3px;
                }
            }
        }
    }
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

nav {
    font-size: 12px;
    text-align: center;
}

nav a.router-link-exact-active {
    color: var(--button-main-background-color);
    font-weight: 500;
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    color: var(--vt-c-text-light-2);
}

nav a:first-child {
    padding-left: 0;
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        flex-wrap: wrap;
    }

    nav {
        text-align: left;
        font-size: 1rem;
    }
}
</style>

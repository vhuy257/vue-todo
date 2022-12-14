import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: { title: 'Home page' }
        },
        {
            path: '/category',
            name: 'category',
            meta: { title: 'Category' },
            // which is lazy-loaded when the route is visited.
            component: () => import('@/views/CategoryView.vue')
        },
        {
            path: '/product/:id',
            name: 'product-detail',
            meta: { title: 'Product detail' },
            // which is lazy-loaded when the route is visited.
            component: () => import('@/views/ProductView.vue')
        },
        {
            path: '/blog',
            name: 'blog',
            meta: { title: 'Blog' },
            // which is lazy-loaded when the route is visited.
            component: () => import('@/views/BlogView.vue')
        },
        {
            path: '/cart',
            name: 'cart',
            meta: { title: 'Cart' },
            // which is lazy-loaded when the route is visited.
            component: () => import('@/views/CartView.vue')
        },
        {
            path: '/checkout',
            name: 'checkout',
            meta: { title: 'Checkout' },
            // which is lazy-loaded when the route is visited.
            component: () => import('@/views/CheckoutView.vue')
        }
    ]
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title as string;

    next();
});

export default router;

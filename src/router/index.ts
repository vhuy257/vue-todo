import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

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
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/CategoryView.vue')
        },
        {
            path: '/product/:id',
            name: 'product-detail',
            meta: { title: 'Product detail' },
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/ProductView.vue')
        }
    ]
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title as string;

    next();
});

export default router;

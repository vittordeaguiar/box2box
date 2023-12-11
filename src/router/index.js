import { createRouter, createWebHistory } from 'vue-router';
// import axios from 'axios';
// import store from '../stores/index';

import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginUser.vue';
import BuyShirtView from '../views/BuyShirtView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: '',
            component: HomeView,
        },
        {
            path: '/home',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView,
        },
        {
            path: '/comprar/:id',
            name: 'comprar',
            component: BuyShirtView,
            props: (route) => ({ id: route.params.id }),
        },
        {
            path: '/:catchAll(.*)',
            redirect: '/home',
        },
    ],
    scrollBehavior() {
        return { top: 0 };
    },
});

export default router;

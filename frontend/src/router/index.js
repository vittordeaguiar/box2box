import { createRouter } from 'vue-router';
// import axios from 'axios';
// import store from '../stores/index';

import HomeView from '../views/HomeView.vue';

const router = createRouter({
    // history: createWebHistory(import.meta.env.BASE_URL),
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
            path: '/:catchAll(.*)',
            redirect: '/home',
        },
    ],
    scrollBehavior() {
        return { top: 0 };
    },
});

// let isAuthInitialized = false;
// export const initializeAuth = async () => {
//     if (isAuthInitialized) return;

//     try {
//         const API_URL = `${import.meta.env.VITE_API_URL}/api/auth`;
//         const response = await axios.get(`${API_URL}/checkAuth`, {
//             withCredentials: true,
//         });
//         if (response.data.success) {
//             await store.dispatch('authenticate', {
//                 isAuthenticated: true,
//                 userId: response.data.userId,
//                 userName: response.data.userName,
//                 userType: response.data.userType,
//             });
//         } else {
//             await store.dispatch('authenticate', {
//                 isAuthenticated: false,
//                 userId: null,
//                 userName: '',
//                 userType: '',
//             });
//         }
//         isAuthInitialized = true;
//     } catch (error) {
//         console.error('Erro: ', error.response);
//         await store.dispatch('authenticate', {
//             isAuthenticated: false,
//             userId: null,
//             userName: '',
//             userType: '',
//         });
//     }
// };

// router.beforeEach(async (to, from, next) => {
//     if (!isAuthInitialized) {
//         await initializeAuth();
//     }
//     const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
//     const onlyWhenLoggedOut = to.matched.some(
//         (record) => record.meta.onlyWhenLoggedOut,
//     );
//     const isAuthenticated = store.getters.isAuthenticated;

//     if (requiresAuth && !isAuthenticated) {
//         next('/login');
//     } else if (onlyWhenLoggedOut && isAuthenticated) {
//         next('/profiles');
//     } else if (requiresAuth && isAuthenticated && isAuthInitialized) {
//         next();
//     } else {
//         next();
//     }
// });

export default router;

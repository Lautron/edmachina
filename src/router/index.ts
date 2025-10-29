import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/LoginView.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('@/views/RegisterView.vue')
        },
        {
            path: '/forgot-password',
            name: 'forgot-password',
            component: () => import('@/views/ForgotPasswordView.vue')
        },
        {
            path: '/',
            component: DefaultLayout,
            children: [
                {
                    path: '',
                    name: 'dashboard',
                    component: () => import('@/views/DashboardView.vue')
                },
                {
                    path: '/pet-profile',
                    name: 'pet-profile-default',
                    component: () => import('@/views/DefaultView.vue')
                },
                {
                    path: '/health',
                    name: 'health-default',
                    component: () => import('@/views/DefaultView.vue')
                },
                {
                    path: '/vaccination',
                    name: 'vaccination-default',
                    component: () => import('@/views/DefaultView.vue')
                },
                {
                    path: '/chat',
                    name: 'chat-default',
                    component: () => import('@/views/DefaultView.vue')
                },
                {
                    path: '/appointments',
                    name: 'appointments-default',
                    component: () => import('@/views/DefaultView.vue')
                },
                {
                    path: '/settings',
                    name: 'settings-default',
                    component: () => import('@/views/DefaultView.vue')
                },
                {
                    path: '/documentation',
                    name: 'documentation-default',
                    component: () => import('@/views/DefaultView.vue')
                },
            ]
        }
    ]
});

export default router;

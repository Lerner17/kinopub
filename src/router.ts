import { createRouter, createWebHashHistory } from 'vue-router';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: import('@/pages/HomePage.vue'),
    },
    {
      name: 'Login',
      path: '/login',
      component: import('@/pages/LoginPage.vue'),
      meta:{
        layout: 'login-required-layout',
      },
    },
  ],
});

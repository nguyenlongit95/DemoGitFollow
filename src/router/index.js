// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import LoginComponent from '@/components/LoginComponent.vue';
import HomeComponent from '@/components/HomeComponent.vue';
import DetailComponent from '@/components/DetailComponent.vue';

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: LoginComponent
  },
  {
    path: '/index',
    name: 'Index',
    component: HomeComponent
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeComponent
  },
  {
    path: '/google-youtube-live-callback',
    name: 'Home',
    component: HomeComponent
  },
  {
    path: '/detail',
    name: 'Detail',
    component: DetailComponent
  },
  {
    path: '/register1',
    name: 'Register',
    component: MenuComponent
  }, 
  {
    path: '/category',
    name: 'Category',
    component: DetailComponent
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

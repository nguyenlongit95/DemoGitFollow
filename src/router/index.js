// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import LoginComponent from '@/components/LoginComponent.vue';
import HomeComponent from '@/components/HomeComponent.vue';
import DetailComponent from '@/components/DetailComponent.vue';
import ChangeAvatarComponent from '@/components/ChangeAvatarComponent.vue';
import ReportComponent from '@/components/ReportComponent.vue';
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
    path: '/change',
    name: 'Change',
    component: DetailComponent
  },
  {
    path: '/change-password',
    name: 'ChangePassword',
    component: DetailComponent
  },
  {
    path: '/register',
    name: 'Register',
    component: MenuComponent
  },
  {
    path: '/register',
    name: 'Register',
    component: MenuComponent
  }, 
  {
    path: '/category',
    name: 'Category',
    component: DetailComponent
  },
  {
    path: '/report',
    name: 'Report',
    component: ReportComponent
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

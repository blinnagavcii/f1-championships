import Vue from 'vue'
import VueRouter from 'vue-router'
import Championship from '@/views/Championship.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/championships/2009'
  },
  {
    path: '/championships',
    redirect: '/championships/2009'
  },
  {
    path: '/championships/:season', // /championships/2019
    name: 'Championship',
    component: Championship, // homepage
  },
  {
    path: '/championships/:season/:id', // /championships/2019/hamilton
    name: 'Driver Details',
    component: () => import('@/views/DriverDetails.vue'),
  },
  {
    path: '*',
    name: 'Not Found',
    component: () => import('@/views/NotFound.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

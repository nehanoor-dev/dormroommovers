import CheckoutPage from '@/views/CheckoutPage.vue'
import HomePage from '@/views/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    // { 
    //   path: '/landing/:school?', 
    //   name: 'LandingWithSchool', 
    //   component: HomePage
    // },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutPage,
    },
  ],
})



export default router;

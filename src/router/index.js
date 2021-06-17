import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import product from '../components/product.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product',
    name: 'product',
    component: product
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

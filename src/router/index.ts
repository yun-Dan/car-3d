import { createRouter, createWebHistory } from 'vue-router'
import CarScene from '../views/CarScene.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: CarScene
    }
  ]
})

export default router

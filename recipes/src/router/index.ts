import { ROUTES } from '@/constants'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'base',
      redirect: () => ({ name: 'home' })
    },
    {
      path: '/recipes',
      name: ROUTES.HOME,
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/recipes/:recipeId',
      name: ROUTES.INFORMATION,
      component: () => import('@/views/RecipeItem.vue')
    }
  ]
})

export default router

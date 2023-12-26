import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UsersIndex from '@/views/users/users-index.vue'
import UserShow from '@/views/users/user-show.vue'
import ItemsIndex from '@/views/items/items-index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/users',
      name: 'users',
      component: UsersIndex
    },
    {
      path: '/users/:id',
      name: 'user-show',
      component: UserShow
    },
    {
      path: '/items',
      name: 'items',
      component: ItemsIndex
    }
  ]
})

export default router

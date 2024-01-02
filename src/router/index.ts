import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NewSession from '@/views/sessions/new-session.vue'
import UsersIndex from '@/views/users/users-index.vue'
import UserShow from '@/views/users/user-show.vue'
import ItemsIndex from '@/views/items/items-index.vue'
import ItemShow from '@/views/items/item-show.vue'
import { useCookies } from '@vueuse/integrations/useCookies'

const cookies = useCookies(['session_id']);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'new-session',
      component: NewSession
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
    },
    {
      path: '/items/:id',
      name: 'item-show',
      component: ItemShow
    }
  ]
})

router.beforeEach((to) => {
  const canAccess = cookies.get('session_id')

  if (!canAccess && to.name !== 'new-session') {
    return { name: 'new-session' }
  }
})

export default router

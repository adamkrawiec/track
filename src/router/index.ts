import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NewSession from '@/views/sessions/new-session.vue'
import UsersIndex from '@/views/users/users-index.vue'
import UserShow from '@/views/users/user-show.vue'
import ItemsIndex from '@/views/items/items-index.vue'
import ItemShow from '@/views/items/item-show.vue'
import { useCookies } from '@vueuse/integrations/useCookies'
import UserTasks from '../components/users/user-tasks.vue'
import UserActivities from '../components/users/user-activities.vue'
import UserHome from '../components/users/user-home.vue'

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
      path: '/users/:userId',
      name: 'user-show',
      component: UserShow,
      props: true,
      children: [
        {
          path: '',
          name: 'user-home',
          props: true,
          component: UserHome
        },
        {
          path: 'tasks',
          name: 'user-tasks',
          props: true,
          component: UserTasks
        },
        {
          path: 'activities',
          name: 'user-activities',
          props: true,
          component: UserActivities
        }
      ]
    },
    {
      path: '/items',
      name: 'items',
      component: ItemsIndex
    },
    {
      path: '/items/:itemId',
      name: 'item-show',
      component: ItemShow,
      props: true
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

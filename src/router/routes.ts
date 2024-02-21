import HomeView from '@/views/HomeView.vue'
import NewSession from '@/views/sessions/new-session.vue'
import UsersIndex from '@/views/users/users-index.vue'
import UserShow from '@/views/users/user-show.vue'
import ItemsIndex from '@/views/items/items-index.vue'
import ItemShow from '@/views/items/item-show.vue'
import UserTasks from '../components/users/sub-views/user-tasks.vue'
import UserActivities from '../components/users/sub-views/user-activities.vue'
import UserHome from '../components/users/sub-views/user-home.vue'

const routes = [
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
];

export default routes;

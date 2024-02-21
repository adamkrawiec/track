import { createRouter, createWebHistory } from 'vue-router'
import { useCookies } from '@vueuse/integrations/useCookies'
import routes from "@/router/routes";

const cookies = useCookies(['session_id']);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  const canAccess = cookies.get('session_id')

  if (!canAccess && to.name !== 'new-session') {
    return { name: 'new-session' }
  }
})

export default router;
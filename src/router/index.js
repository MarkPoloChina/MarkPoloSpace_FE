import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './client/index'

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title + ' | MPS'
  }
})
export default router
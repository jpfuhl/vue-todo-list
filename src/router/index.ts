import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'tasks',
      component: () => import('../views/TasksView.vue')
    },
    {
      path: '/archive',
      name: 'archive',
      component: () => import('../views/ArchiveView.vue')
    },
  ],
  linkActiveClass: 'nav-link-active',
})

export default router

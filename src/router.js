import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Dashboard from './pages/Dashboard.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
  ]
})

export default router

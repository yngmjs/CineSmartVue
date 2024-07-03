import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/sucursal',
    //   name: 'confiteria',
    //   component: () => import('../views/AboutView.vue')
    // },
    // {
    //   path: '/confiteria',
    //   name: 'confiteria',
    //   component: ()=> import('../views/ConfiteriaView.vue')
    // },
    // {
    //   path: '/promociones',
    //   name: 'promociones',
    //   component: ()=> import('../views/PromocionesView.vue')
    // },
    // {
    //   path: '/preventa',
    //   name: 'preventa',
    //   component: ()=> import('../views/PreventasView.vue')
    // },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: ()=> import('../views/LoginView.vue')
    // }
  ]
})

export default router

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
    //},
    {
      path: '/confiteria',
      name: 'confiteria',
      component: ()=> import('../views/ConfiteriaView.vue')
    },
    {
      path: '/promociones',
      name: 'promociones',
      component: ()=> import('../views/PromocionView.vue')
    },
    // {
    //   path: '/preventa',
    //   name: 'preventa',
    //   component: ()=> import('../views/PreventasView.vue')
    // },
    {
      path: '/login',
      name: 'login',
      component: ()=> import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: ()=> import('../views/RegisterView.vue')
    },

    //  //////////////////////////////////////////////////////////////// AUXILIAR
    {
        path: '/sucursales',
        name: 'sucursales',
        component: ()=> import('../views/SucursalView.vue')
    },
    {
      path: '/comprar',
      name: 'comprar',
      component: ()=> import('../views/AsientosView.vue')
    },
    {
      path: '/comprartickets',
      name: 'comprartickets',
      component: ()=> import('../views/PagarView.vue')
    },
  ]
})

export default router

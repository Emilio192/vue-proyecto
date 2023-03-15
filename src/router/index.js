import { createRouter, createWebHashHistory } from 'vue-router'

import Principal from '../views/Principal.vue'
import About from '../views/About.vue'

const routes = [
   {path: '/',name: 'principal',component: Principal},
   {path: '/about',name: 'about',component: About}
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about"*/  '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

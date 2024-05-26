import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/app',
    name: 'app',
    component: () => import(/* webpackChunkName: "appPage" */ '../pages/AppPage.vue')
  },
  {
    path: '/colleciton',
    name: 'colleciton',
    component: () => import(/* webpackChunkName: "CollectionPage" */ '../pages/CollectionPage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

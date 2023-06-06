import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Detail from '../views/DetailFootBallView.vue'

const routes = [
  {
    path: '/jadwal/pertandingan',
    name: 'home',
    component: HomeView
  },
  {
    path: '/detail/:id/:Goals/:Win/:Loss',
    component: Detail, 
    props: true
  },
  {
    path: '/',
    name: 'club',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FootBallView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

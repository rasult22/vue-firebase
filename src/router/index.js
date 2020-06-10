import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'app',
    component: App
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/5S',
    name: '5S',
    component: () => import(/* webpackChunkName: "about" */ '../views/5S.vue')
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
  },
  {
    path: '/tools',
    name: 'Tools',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tools.vue')
  },
  {
    path: '/Practicing',
    name: 'Practicing',
    component: () => import(/* webpackChunkName: "about" */ '../views/Practicing.vue')
  },
  {
    path: '/Comprehension',
    name: 'Comprehension',
    component: () => import(/* webpackChunkName: "about" */ '../views/Comprehension.vue')
  },
  {
    path: '/learning/:techSlug',
    props: true,
    name: 'Learning',
    component: () => import(/* webpackChunkName: "Learning" */ '../views/Learning.vue'),
    children: [
      {
        path: ':lessonPartSlug',
        name: 'LessonPart',
        props: true,
        component: () => import(/* webpackChunkName: "LessonPart" */ '../views/LessonPart.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

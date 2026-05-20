import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/call-for-papers',
    name: 'CallForPapers',
    component: () => import('../views/CallForPapers.vue')
  },
  {
    path: '/call-for-workshops',
    name: 'CallForWorkshops',
    component: () => import('../views/CallForWorkshops.vue')
  },
  {
    path: '/call-for-tutorials',
    name: 'CallForTutorials',
    component: () => import('../views/CallForTutorials.vue')
  },
  {
    path: '/call-for-posters',
    name: 'CallForPosters',
    component: () => import('../views/CallForPosters.vue')
  },
  {
    path: '/committees',
    name: 'Committees',
    component: () => import('../views/Committees.vue')
  },
  {
    path: '/program',
    name: 'Program',
    component: () => import('../views/Program.vue')
  },
  {
    path: '/keynotes',
    name: 'Keynotes',
    component: () => import('../views/Keynotes.vue')
  },
  {
    path: '/workshops',
    name: 'Workshops',
    component: () => import('../views/Workshops.vue')
  },
  {
    path: '/tutorials',
    name: 'Tutorials',
    component: () => import('../views/Tutorials.vue')
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: () => import('../views/Schedule.vue')
  },
  {
    path: '/accepted-papers',
    name: 'AcceptedPapers',
    component: () => import('../views/AcceptedPapers.vue')
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import('../views/Registration.vue')
  },
  {
    path: '/sponsorship',
    name: 'Sponsorship',
    component: () => import('../views/Sponsorship.vue')
  },
  {
    path: '/attending',
    name: 'Attending',
    component: () => import('../views/Attending.vue')
  },
  {
    path: '/venue',
    name: 'Venue',
    component: () => import('../views/Venue.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/dai/2026/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router

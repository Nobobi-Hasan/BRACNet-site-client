import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import Dashboard from '../views/Dashboard.vue'
import JobForm from '../views/JobForm.vue'
import JobUpdate from '../views/JobUpdate.vue'

import AccountService from '../Services/Account/AccountService';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/login',
      name: 'Login',
      component: LoginView,
      beforeEnter: (to, from, next) => {
        if (!AccountService.isAuthenticated()) {
          next();
        } else {
          next({ name: 'Home' })
        }
      }
    },

    {
      path: "/",
      name: "Home",
      component: Dashboard,
      beforeEnter: (to, from, next) => {
        if (AccountService.isAuthenticated()) {
          next();
        } else {
          next({ name: 'Login' })
        }
      }
    },

    {
      path: "/job-add",
      name: "JobAdd",
      component: JobForm,
      beforeEnter: (to, from, next) => {
        if (AccountService.isAuthenticated()) {
          next();
        } else {
          next({ name: 'Login' })
        }
      }
    },

    {
      path: "/job-update/:id",
      name: "JobUpdate",
      component: JobUpdate,
      beforeEnter: (to, from, next) => {
        if (AccountService.isAuthenticated()) {
          next();
        } else {
          next({ name: 'Login' })
        }
      }
    },






    // Default routers
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router

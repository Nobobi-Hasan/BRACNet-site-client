import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import ResetPassword from '../views/ResetPassword.vue'
import ChangePassword from '../views/ChangePassword.vue'
import Dashboard from '../views/Dashboard.vue'
import JobForm from '../views/JobForm.vue'
import JobUpdate from '../views/JobUpdate.vue'

import AccountService from '../Services/Account/AccountService';

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
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
      path: '/forgot-password',
      name: 'Forgot Password',
      component: ForgotPassword,
      beforeEnter: (to, from, next) => {
        if (!AccountService.isAuthenticated()) {
          next();
        } else {
          next({ name: 'Home' })
        }
      }
    },

    

    {
      path: "/reset-password",
      name: "Reset Password",
      component: ResetPassword,
      beforeEnter: (to, from, next) => {
        if (!AccountService.isAuthenticated()) {
          next();
        } else {
          next({ name: 'Home' })
        }
      }
    },

    {
      path: '/change-password',
      name: 'ChangePassword',
      component: ChangePassword,
      beforeEnter: (to, from, next) => {
        if (AccountService.isAuthenticated()) {
          next();
        } else {
          next({ name: 'Login' })
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

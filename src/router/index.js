import { createRouter, createWebHistory } from "vue-router";

import Dashboard from '../views/Dashboard.vue'
import Users from '../views/Users.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from "../views/RegisterView.vue";

const routes = [

 {
  path:'/',
  name:'dashboard',
  component: Dashboard,
  meta: { requiresAuth: true } 
 },
  {
    path: '/users',
    component: Users,
    meta: { requiresAuth: true}
  },
  {
    path: '/login',
    component: LoginView
  },
  {
    path:'/register',
    component: RegisterView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login','/register']
  const authRequired = !publicPages.includes(to.path)
  const isAuthenticated =localStorage.getItem('logadi') ==='true'

  if(authRequired && !isAuthenticated) {
    next('/login') 
  }else {
    next() 
  }
})

export default router
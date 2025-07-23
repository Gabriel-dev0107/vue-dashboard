import { createRouter, createWebHistory } from "vue-router";
import Dashboard from '../views/Dashboard.vue'
import Users from '../views/Users.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from "../views/RegisterView.vue";

const routes = [
  {
    path:'/',
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

// ✅ Adiciona o guard global
router.beforeEach((to, from, next) => {
  const isLogged = localStorage.getItem('logado') === 'true'

  if (!isLogged && to.path !== '/login' && to.path !== '/register') {
    return next('/login')
  }

  if (isLogged && (to.path === '/login' || to.path === '/register')) {
    return next('/')
  }

  next()
})

export default router
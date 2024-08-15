import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import App from './App.vue'

import LoginPage from './pages/login/LoginPage.vue';
import RegisterPage from './pages/register/RegisterPage.vue';
import DashboardPage from './pages/dashboard/DashboardPage.vue';


const routes = [
  { path: '/', component: LoginPage },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
  { path: '/dashboard', component: DashboardPage}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App)
  .use(router)
  .mount('#app')
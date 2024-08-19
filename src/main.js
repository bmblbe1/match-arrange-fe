import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import App from './App.vue'
import store from '/src/store'

import LoginPage from './pages/login/LoginPage.vue';
import RegisterPage from './pages/register/RegisterPage.vue';
import DashboardPage from './pages/dashboard/DashboardPage.vue';


const routes = [
  { path: '/', component: LoginPage, meta: { needsUser: false } },
  { path: '/login', component: LoginPage, name: 'login',  meta: { needsUser: false } },
  { path: '/register', component: RegisterPage, name: 'register', meta: { needsUser: false } },
  { path: '/dashboard', component: DashboardPage, name: 'dashboard',  meta: { needsUser: true }}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


router.beforeEach(( to, from, next) =>{
    console.log('to path : ',to.path, 'from paTTH',from.path, 'uSER: ' , store.currentUser );
    
    const noUser = store.currentUser === null;

    if (noUser && to.meta.needsUser){
      next({path: '/login'});
    }
    else if (!noUser && (to.path === '/login' || to.path === '/register')) {
      next({path: '/dashboard'}); 
    }
      else {
        next();
  }
  console.log('to path : ',to.path, 'from paTTH',from.path, 'uSER: ' , store.currentUser );
})

createApp(App)
  .use(router)
  .mount('#app')

export default router ;
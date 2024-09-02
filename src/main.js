import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import App from './App.vue'
import store from '/src/store'

import LoginPage from './pages/login/LoginPage.vue';
import RegisterPage from './pages/register/RegisterPage.vue';
import DashboardPage from './pages/dashboard/DashboardPage.vue';
import MatchSearchingPage from './pages/matchsearch/MatchSearchingPage.vue';
import MatchFormPage from './pages/matchsearch/MatchFormPage.vue';
import ManageTeamPage from './pages/manageteam/ManageTeamPage.vue';
//import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from '@/firebase'

const routes = [
  { path: '/', component: LoginPage, meta: { needsUser: false } },
  { path: '/login', component: LoginPage, name: 'login',  meta: { needsUser: false } },
  { path: '/register', component: RegisterPage, name: 'register', meta: { needsUser: false } },
  { path: '/dashboard', component: DashboardPage, name: 'dashboard',  meta: { needsUser: true }},
  { path: '/matchsearch', component: MatchSearchingPage, name: 'matchsearch', meta:{needsUser: false}},//needuser:true(false is just for test purpose)
  { path: '/matchsearch/form', component: MatchFormPage, name: 'matchform', meta: {needsUser:false}}, //needuser:true(false is just for test purpose)
  { path: '/manageteam', component: ManageTeamPage, name: 'manageteam'}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});


/*onAuthStateChanged(auth, (user) =>{
  if (user) {
    store.currentUser = user;
  } else {
    store.currentUser = null;
}*/ // potencijalno implementirati onauthstatechanged  u main ...


router.beforeEach(( to, from, next) =>{
    console.log('to path : ',to.path, 'from paTTH',from.path, 'uSER: ' , store.currentUser );
    
    const noUser = store.currentUser === null;

    if (noUser && to.meta.needsUser){
      next({path: '/login',
        replace: true
      });
    }
    else if (!noUser && (to.path === '/login' || to.path === '/register')) {
      next({path: '/dashboard'}); 
    }
      else {
        next();
  }
  console.log('to path : ',to.path, 'from paTTH',from.path, 'uSER: ' , store.currentUser );
})
//}) zatvara ne gornjeg on auth state changea.


createApp(App)
  .use(router)
  .mount('#app')

export default router ;
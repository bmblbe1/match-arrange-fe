<template>
  <div id="app">
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { auth } from '@/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import store from './store';
import router from '/src/main';



export default {

  name: 'App',
  data() {
    return {
      store
    };
  },
   created(){
   onAuthStateChanged(auth, (user) => {
    console.log(user);
    /*console.log(auth);*/
    //const currentPath = router.currentRoute.value.path; 
    const currentRoute = router.currentRoute;

    console.log('ruta', currentRoute);
    console.log("provjera stanja logina.")
    if (user){
      console.log(user.email);
      store.currentUser = user;
      
     /* if(currentPath === "/login"){
        console.log('Rerouting to dashboard!!!');
        router.push('/dashboard');
      }*/

      if(currentRoute.value.meta.needsUser){
        console.log('Rerouting to dashboard!!!');
        router.push('/dashboard');
      }

    }
    else {
      console.log("Nema Korisnika.");
      store.currentUser = null;

      /*if(currentPath !== "/login"){
        console.log('Rerouting to login!!!');
        router.push('/login');
      }*/

      if( !currentRoute.value.meta.needsUser ){
        console.log('Rerouting to login!!!');
        router.push('/login');
      }
   
      }
    })
  }
}
</script>
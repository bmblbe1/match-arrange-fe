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
import router from '@/main';


  onAuthStateChanged(auth, (user) => {
   /* console.log(user);
    console.log(auth);*/
    const currentPath = router.currentRoute.value.path;
    console.log(router);

    if (user){
      console.log(user.email);
      store.currentUser = user.email;
      
      if(currentPath === "/login"){
        console.log('Rerouting to dashboard!!!');
        router.push('/dashboard');
      }
    }
    else {
      console.log("Nema Korisnika.");
      store.currentUser = null;

      if(currentPath !== "/login"){
        console.log('Rerouting to login!!!');
        router.push('/login');
      }
   
    }
  })
  console.log(router)
export default {
  name: 'App',
  data() {
    return {
      store
    };
  },
}
</script>
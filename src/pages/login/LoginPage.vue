<template>
    <div class="container">
        <div class="box">
            <h1>
                Login to Page
            </h1>
            <input type="email" v-model="email" placeholder="Enter your Email" class="input-field"/>
            <input type="password" v-model="password" placeholder="Enter your Password" class="input-field"/>
            <button type = "submit" @click="login">Login</button>
            <div>
                Do not have an account?  <router-link to="/register">Register here.</router-link>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .container {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
 
    .box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 2px solid #021526;
        border-radius: 12px;
        padding: 24px;
        gap: 16px;
    }
        .box h1 {
            text-align: center;
        }


    .input-field {
        padding: 12px;
        border: 2px solid #021526;
        border-radius: 4px;
    }
    button{
        font-weight: bold;
        padding: 4px;
    } 
</style>
<script>
import { auth } from '/src/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
import store from '@/store'

    export default {
    name: 'LoginPage',
    data(){
        return {
            email: '',
            password: '',             
            }
        },
    methods: {
         login() {
            signInWithEmailAndPassword(auth, this.email,this.password )
            .then((userCredential) =>{
                const user = userCredential.user;
                console.log('User logged in: ', user);
                store.currentUser = user;
                this.$router.replace('/dashboard')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Error signing up: ', errorCode, errorMessage);
            });
        },
    },
}
</script>
<template>
    <div class="container">
        <div class="box">
            <h1>
                Create Your Account 
            </h1>
            <input type="text" id="username" name="username" v-model="username" placeholder="Username" class="input-field"/>
            <input type="text" id="name" name="name" v-model="name" placeholder="Name" class="input-field"/>
            <input type="text" id="surname" name="surname" v-model="surname" placeholder="Surname" class="input-field"/>            
            <input type="email" v-model="email" placeholder="Enter your Email" class="input-field"/>
            <input type="password" v-model="password" placeholder="Enter your Password" class="input-field"/>
            <input type="password" v-model="passwordRepeat" placeholder="Repeat your Password" class="input-field"/>

            <button type="button" @click="signup">Sign Up</button>
            <div>
                Already have an account ? <router-link to="/login"> Go to Login</router-link>
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
        background-color: #B4D6CD;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 2px solid #021526;
        border-radius: 12px;
        padding: 24px;
        gap: 16px;

        h1 {
            text-align: center;
        }
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
import {app} from '@/firebase';
    export default {
    name: 'SignUp',
    data(){
        return {
            name: '',
            surname: '',
            email: '',
            username: '',
            password: '',
            passwordRepeat: ''
             
        }
    },
    methods: {
        signup() {
            if(this.password !=this.passwordRepeat ){
                alert("PASSWORDS DO NOT MATCH");
            }
            else {

            app.auth()
            .createUserWithEmailAndPassword(this.email,this.password)
            .then(function (){
                console.log("Uspjesna registracija");
            }) .catch(function(error) {
                console.error("greška",error)
            })
            console.log("ide gas")
            }
        },
    }
}
</script>
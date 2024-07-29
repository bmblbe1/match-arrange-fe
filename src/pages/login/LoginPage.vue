<template>
    <div class="container">
        <div class="box">
            <h1>
                Login to Page
            </h1>
            <input type="email" placeholder="Enter your Email" class="input-field"/>
            <input type="password" placeholder="Enter your Password" class="input-field"/>
            <button @click="logMessage">Login</button>
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
    export default {
    name: 'LoginPage',
    methods: {
    logMessage() {
      console.log('Button clicked');
    }
  }
}
</script>
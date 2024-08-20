<template>
    <div class="container">
        <div class="dashboard">
            <aside class="sidebar">
                <div class="logo">ploca</div>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">History</a></li>
                        <li><a href="#">Settings</a></li>
                    </ul>
                </nav>
            </aside>
            <div class="main-content">
                <header class="header">
                    <div class="header-title">Dashboard</div>
                    <div class="sign-out">
                        <button @click="signout">Sign out</button>
                    </div>
                </header>
                <div class="content">
                    <div class="card">
                        <h3 @click="matchSearch">Search match</h3>
                        <p>hm</p>
                    </div>
                    <div class="card">
                        <h3>Current matches</h3>
                        <p>provjera</p>
                    </div>
                    <div class="card">
                        <h3>Past matches</h3>
                        <p>score</p>
                    </div>
                </div>
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
        background-color: #f0f2f5;
    }

    .dashboard {
        display: flex;
        height: 100%;
        width: 100%;
        background-color: #ffffff;
        border: 2px solid #021526;
        border-radius: 12px;
        overflow: hidden;
    }

    .sidebar {
        width: 250px;
        background-color: #2c3e50;
        color: #ecf0f1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

    }

    .sidebar .logo {
        font-size: 24px;
        padding: 20px;
        text-align: center;
        font-weight: bold;
        background-color: #1a252f;

    }

    .sidebar nav ul {
        text-align: center;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .sidebar nav ul li {
        padding: 15px 20px;
    }

    .sidebar nav ul li a {
        color: #ecf0f1;
        text-decoration: none;
        display: block;
    }

    .sidebar nav ul li a:hover {
        justify-content: center;
        background-color: #34495e;
        color: #ffffff;
    }

    .main-content {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        border-bottom: 2px solid #021526;
    }

    .header .header-title {
        display: flex;
        justify-content: center;
        font-size: 24px;
        font-weight: bold;
    }
   

    .header .sign-out {
        font-size: 16px;
        font-weight: bold;
    
    }

    .content {
        padding: 24px;
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
        justify-content: center;
    }

    .card {
        background-color: #B4D6CD;
        border: 2px solid #021526;
        border-radius: 8px;
        padding: 16px;
        flex: 1 1 250px;
        box-sizing: border-box;
        max-width: 300px;
    }

    .card h3 {
        text-align: center;
        margin-bottom: 12px;
    }

    .card p {
        font-size: 24px;
        font-weight: bold;
        text-align: center;
    }
    button {
    font-weight: bold;
    padding: 12px 20px;
    background-color: #3498db; 
    color: #ffffff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
    background-color: #2980b9; 
    transform: scale(1.05);
}

button:active {
    background-color: #1d6a96;
    transform: scale(0.98);
}
</style>
<script>
import { auth } from '@/firebase';
import { signOut } from 'firebase/auth';

export default {
    name: 'DashboardPage',
    methods: {
        signout(){
            signOut(auth)
            .then(() => {
                console.log("Signout succesful")
                this.$router.replace('/login')
            })
            .catch((error) => {
                console.log(error , "Failed Sign Out")
            })
        },
        matchSearch (){
            this.$router.push('/matchsearch');
        }
    }
}
</script>

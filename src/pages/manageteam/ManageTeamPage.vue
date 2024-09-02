<template>
    <div class="team-manager">
      <h2>Manage Your Teams</h2>
  
      <div v-if="userTeams.length < maxTeams">
        <input v-model="newTeamName" placeholder="Enter team name" />
        <button @click="createTeam" :disabled="!newTeamName">Create Team</button>
      </div>
  
      <div v-else>
        <p>You have reached the maximum number of teams ({{ maxTeams }}).</p>
      </div>
  
      <h3>Your Teams</h3>
      <ul>
        <li v-for="team in userTeams" :key="team.id">
          <label>
            <input type="radio" v-model="selectedTeamId" :value="team.id" />
            {{ team.name }}
          </label>
        </li>
      </ul>
  
      <button @click="confirmSelection" :disabled="!selectedTeamId">
        Confirm Selection
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userTeams: [],           
        newTeamName: '',         
        selectedTeamId: null,     
        maxTeams: 3               
      };
    },
    methods: {
      createTeam() {
        console.log('create')
      },
      confirmSelection() {
        console.log('selekcija')
      }
    }
  };
  </script>
  
  <style scoped>
  .team-manager {
    max-width: 400px;
    margin: 20px auto;
    padding: 15px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .team-manager h2 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
    font-weight: 600;
  }
  
  .team-manager input[type="text"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 2px solid #ccc;
    border-radius: 5px;
    font-size: 18px;
    box-sizing: border-box;
    transition: border-color 0.3s;
  }
  
  .team-manager input[type="text"]:focus {
    border-color: #ff6f00;
    outline: none;
  }
  
  .team-manager button {
    width: 100%;
    padding: 10px;
    font-size: 18px;
    color: #fff;
    background-color: #ff6f00;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s, opacity 0.3s;
    opacity: 1;
  }
  
  .team-manager button:disabled {
    opacity: 0.6;
    pointer-events: none;
  }
  
  .team-manager button:not(:disabled):hover {
    background-color: #e65c00;
  }
  
  .team-manager h3 {
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 15px;
    color: #333;
    font-weight: 500;
  }
  
  .team-manager ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .team-manager ul li {
    margin-bottom: 12px;
    padding: 10px;
    background-color: #fff;
    border: 2px solid #ddd;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s, border-color 0.3s;
  }
  
  .team-manager ul li:hover {
    background-color: #ffe8d6;
    border-color: #ff6f00;
  }
  
  .team-manager input[type="radio"] {
    margin-right: 10px;
    accent-color: #ff6f00;
  }
  
  .team-manager p {
    color: #ff0000;
    font-weight: bold;
    margin-top: 15px;
  }
  </style>
  
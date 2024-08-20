<template>
    <div class="container">
      <button class="quick-search" @click="quickSearch">Quick Search</button>
      <div class="matches">
        <div class="match" v-for="match in matches" :key="match.id">
          <span class="time">{{ match.time }}</span>
          <span class="details">{{ match.details }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        //treba jos implemmentiratida se sami generiraju . 
        matches: [
          { id: 1, time: '3:00 PM', details: 'Match Details Here' },
          { id: 2, time: '4:00 PM', details: 'More Match Details' },
          //mecevi 
        ]
      }
    },
    methods: {
      quickSearch() {
        console.log("Qquick searchhh");
      }
    }
  }
  </script>
  
  <style scoped>
  body, html {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background: #f0f0f0;
    color: #333;
  }
  
  .container {
    width: 80%;
    margin: 20px auto;
    background: #fff;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }
  
  .quick-search {
    display: block;
    width: 100%;
    padding: 10px 20px;
    font-size: 18px;
    color: #fff;
    background-color: #4CAF50;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 20px;
  }
  
  .matches {
    list-style: none;
    padding: 0;
  }
  
  .match {
    padding: 10px;
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .time {
    font-weight: bold;
    color: #555;
  }
  
  .details {
    flex: 1;
    padding-left: 20px;
  }
  
  .match:last-child {
    border-bottom: none;
  }
  </style>
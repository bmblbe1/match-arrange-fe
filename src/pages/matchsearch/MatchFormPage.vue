<template>
    <div class="match-form">
        <button @click="$emit('close')" class="close-button">X</button>
      <h2>Select a Time Slot</h2>
      <div class="checkbox-container">
         <div v-for="time in times" :key="time" class="checkbox-group"> <!--  samo testno treba jos staviti da akada se na
         originalnoj match searching stranici otvara samo pop up window a ne nova stranica  -->
          <input type="checkbox" :id="time" :value="time" v-model="selectedTimes">
          <label :for="time">{{ time }}</label>
        </div>
      </div>
  
      <h2>Select Maps</h2>
      <div class="checkbox-container">
        <div v-for="map in maps" :key="map" class="checkbox-group">
          <input type="checkbox" :id="map" :value="map" v-model="selectedMaps">
          <label :for="map">{{ map }}</label>
        </div>
      </div>
  
      <button @click="submitMatch" class="submit-button">Submit Match Request</button>
    </div>
  </template>
<style scoped>
  .match-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .match-form h2 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .checkbox-group {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }
  
  .checkbox-group input[type="checkbox"] {
    margin-right: 10px;
    width: 16px;
    height: 16px;
  }
  
  .checkbox-group label {
    font-size: 16px;
  }
  
  .submit-button {
    display: block;
    width: 100%;
    padding: 10px 0;
    margin-top: 20px;
    font-size: 16px;
    color: white;
    background-color: #ff00bf;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
  }
  
  .submit-button:hover {
    background-color: #b300a4;
  }
  .checkbox-container {
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap to the next line */
  gap: 10px; /* Optional: space between items */
}

.checkbox-item {
  flex: 1 1 calc(20% - 10px); /* 20% width minus the gap for 5 items per row */
  display: flex;
  align-items: center;
}

.checkbox-item input[type="checkbox"] {
  margin-right: 5px;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

  </style>
  <script>
  export default {
    data() {
      return {
        //pokusaj implementacije vremena i checkboxa 
        times: [
          '00:00', '01:00', '02:00', '03:00', '04:00',
          '05:00', '06:00', '07:00', '08:00', '09:00',
          '10:00', '11:00', '12:00', '13:00', '14:00',
          '15:00', '16:00', '17:00', '18:00', '19:00',
          '20:00', '21:00', '22:00', '23:00'
        ],
        maps: ['Burgundy', 'Carentan', 'Dawnville', 'Matmata', 'Toujane'],
        selectedTimes: [],
        selectedMaps: []
      };
    },
    methods: {
        //metoda di user submita trazenje meca 
      submitMatch() {
        const matchData = {
          times: this.selectedTimes,
          maps: this.selectedMaps
        };
        this.$emit('submit', matchData);
      }
    }
  };
  </script>
  
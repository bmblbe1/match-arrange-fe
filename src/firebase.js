import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDSF9YnN2BME49HNoFdsOk3yi8TofJ-tLQ",
    authDomain: "match-arrange-df556.firebaseapp.com",
    projectId: "match-arrange-df556",
    storageBucket: "match-arrange-df556.appspot.com",
    messagingSenderId: "178021819507",
    appId: "1:178021819507:web:30e85c5767eaa67207f606"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default {
    firebase,
};
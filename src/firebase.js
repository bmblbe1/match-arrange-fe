import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDSF9YnN2BME49HNoFdsOk3yi8TofJ-tLQ",
    authDomain: "match-arrange-df556.firebaseapp.com",
    projectId: "match-arrange-df556",
    storageBucket: "match-arrange-df556.appspot.com",
    messagingSenderId: "178021819507",
    appId: "1:178021819507:web:30e85c5767eaa67207f606"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app)
  const db = getFirestore(app);
  
export {
    app,
    db,
    auth,
};
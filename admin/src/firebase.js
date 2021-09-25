import firebase from "firebase"


const firebaseConfig = {
  apiKey: "AIzaSyDwbG_Yrg4r2yoeLSgCK4mDv35XSADghGY",
  authDomain: "netflix-c987f.firebaseapp.com",
  projectId: "netflix-c987f",
  storageBucket: "netflix-c987f.appspot.com",
  messagingSenderId: "1002914962394",
  appId: "1:1002914962394:web:d0fec5a942ef7defeebee3",
  measurementId: "G-ZP45CREFHR"
};


firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
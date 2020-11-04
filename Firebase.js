import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyBgPqQErbu0hU-_wDC3aGFHCGQoINAVeiY",
    authDomain: "login-system-b093b.firebaseapp.com",
    databaseURL: "https://login-system-b093b.firebaseio.com",
    projectId: "login-system-b093b",
    storageBucket: "login-system-b093b.appspot.com",
    messagingSenderId: "528351812738",
    appId: "1:528351812738:web:22128bbdeb1a7fe833689b",
    measurementId: "G-RCNGW5C6P7"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export {db, auth };
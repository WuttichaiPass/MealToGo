import { initializeApp } from 'firebase/app';
import * as auth from "firebase/auth";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD4ICagURjI2inUbBZiehqKMklghSbxntQ",
    authDomain: "mealtogo-a0001.firebaseapp.com",
    projectId: "mealtogo-a0001",
    storageBucket: "mealtogo-a0001.appspot.com",
    messagingSenderId: "229181204997",
    appId: "1:229181204997:web:471afa866e747bfc7b8a6c"
  };

  initializeApp(firebaseConfig);
  const getAuth = auth.getAuth();
  export const firebase = { auth,getAuth }
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

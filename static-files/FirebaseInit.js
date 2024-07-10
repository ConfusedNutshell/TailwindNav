// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBxLjGYspAEkCrTcVrTFA4Sk7-kANllik0",

  authDomain: "flashandminnie.firebaseapp.com",

  projectId: "flashandminnie",

  storageBucket: "flashandminnie.appspot.com",

  messagingSenderId: "139039702133",

  appId: "1:139039702133:web:8b92302efb1c0b42ffcc3c",

  measurementId: "G-QKHNRGMP77"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
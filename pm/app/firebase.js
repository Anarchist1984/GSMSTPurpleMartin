// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0gGinG5Kl9TLQXT-IJopdZWhm6CbCYoE",
  authDomain: "purplemartin-d7870.firebaseapp.com",
  projectId: "purplemartin-d7870",
  storageBucket: "purplemartin-d7870.appspot.com",
  messagingSenderId: "1042255981620",
  appId: "1:1042255981620:web:fc4782892e136c1b31ee61",
  measurementId: "G-M45E5S53EV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth()
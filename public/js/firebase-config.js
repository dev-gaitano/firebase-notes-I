// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Debug: alert("firebase-config run")

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFVC7zrFJaW16lUjIVJ0Q-SSLb5ae_QZA",
  authDomain: "fir-notes-1848c.firebaseapp.com",
  databaseURL: "https://fir-notes-1848c-default-rtdb.firebaseio.com",
  projectId: "fir-notes-1848c",
  storageBucket: "fir-notes-1848c.firebasestorage.app",
  messagingSenderId: "981098571476",
  appId: "1:981098571476:web:685c1b6d66a79e4503bd41",
  measurementId: "G-YH6YD8T1F4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

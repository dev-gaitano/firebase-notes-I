import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAnalytics,
  isSupported as analyticsSupported,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

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
  appId: "1:981098571476:web:4bbe7f4c54d9385003bd41",
  measurementId: "G-B6PP45Y26G",
};

const app = initializeApp(firebaseConfig);

export let analytics = null;
if (location.hostname !== "localhost") {
  analyticsSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
      console.log("Firebase Analytics initialized.");
    } else {
      console.warn("Firebase Analytics not supported in this browser.");
    }
  });
} else {
}

export const db = getFirestore(app);
export const auth = getAuth(app);
export {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
};

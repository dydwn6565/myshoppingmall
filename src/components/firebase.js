// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCA4T1B6S16KOjePU8boLCVqaaIWBtVo1Q",
  authDomain: "myshoppingmall-ef18a.firebaseapp.com",
  projectId: "myshoppingmall-ef18a",
  storageBucket: "myshoppingmall-ef18a.appspot.com",
  messagingSenderId: "618386901433",
  appId: "1:618386901433:web:27410b2b2c2c5a7977ce68",
  measurementId: "G-0JTRH0EVP2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7AVyuN0T9ySF5OcRmu0rLcgBwRUWneu4",
  authDomain: "myshoppingmall-67f46.firebaseapp.com",
  databaseURL: "https://myshoppingmall-67f46-default-rtdb.firebaseio.com",
  projectId: "myshoppingmall-67f46",
  storageBucket: "myshoppingmall-67f46.appspot.com",
  messagingSenderId: "76340281178",
  appId: "1:76340281178:web:969deddf646f2ee1a9bd63",
  measurementId: "G-0SYM7L3PGK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };

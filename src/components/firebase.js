// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARbmI-x_yYOJ_6N4XqshZqYttaRlIQZBs",
  authDomain: "shoppingm-a466b.firebaseapp.com",
  databaseURL: "https://shoppingm-a466b-default-rtdb.firebaseio.com",
  projectId: "shoppingm-a466b",
  storageBucket: "shoppingm-a466b.appspot.com",
  messagingSenderId: "869394763586",
  appId: "1:869394763586:web:5105fa2a64585a26a4c2db",
  measurementId: "G-8K9DKC6QQN",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };

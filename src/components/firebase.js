// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOEw5wZF3QSqQn4fQme_Ubh1xbYqYZB1k",
  authDomain: "myshoppingmall-26885.firebaseapp.com",
  projectId: "myshoppingmall-26885",
  storageBucket: "myshoppingmall-26885.appspot.com",
  messagingSenderId: "1033904940474",
  appId: "1:1033904940474:web:59bce9f596e052c9d56983",
  measurementId: "G-QXHH7310YH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };

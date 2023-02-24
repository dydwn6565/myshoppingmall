// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqHGIImMpOF7UV7llYTzuGiuL5-wANa2I",
  authDomain: "myshoppingmall-56bfe.firebaseapp.com",
  projectId: "myshoppingmall-56bfe",
  storageBucket: "myshoppingmall-56bfe.appspot.com",
  messagingSenderId: "935650866847",
  appId: "1:935650866847:web:a529a6ae2eac90fa1fd4aa",
  measurementId: "G-HN6N62BY7T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };

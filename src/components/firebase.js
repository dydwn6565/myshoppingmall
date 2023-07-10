// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGhKo7z9Zwchl5PR-J_G2UzAdr-0nNSQw",
  authDomain: "myshoppingmall-b92bc.firebaseapp.com",
  projectId: "myshoppingmall-b92bc",
  storageBucket: "myshoppingmall-b92bc.appspot.com",
  messagingSenderId: "1067697759273",
  appId: "1:1067697759273:web:2b5b22ae1ef4a9b5d82838",
  measurementId: "G-4TQKJW4RR5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };

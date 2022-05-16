// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd3_DWGpjxuNKJTS9mNMlCjIKloc_YP0s",
  authDomain: "myshoppingmall-a7f02.firebaseapp.com",
  projectId: "myshoppingmall-a7f02",
  storageBucket: "myshoppingmall-a7f02.appspot.com",
  messagingSenderId: "1079247511372",
  appId: "1:1079247511372:web:1f3fc919f78852accf39e9",
  measurementId: "G-QZ4B9FYLRD"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };

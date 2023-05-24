// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYGXr7VKwu2h8-_K-4hmjKIWQwWYKNJEA",
  authDomain: "myshoppingmall-57309.firebaseapp.com",
  projectId: "myshoppingmall-57309",
  storageBucket: "myshoppingmall-57309.appspot.com",
  messagingSenderId: "9300078183",
  appId: "1:9300078183:web:30e9227c30c5b57606aec2",
  measurementId: "G-CC6C048EH2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };

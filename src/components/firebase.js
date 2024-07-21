// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn1-N8bK0nWfV62dQNW6MeUB07baLsBMk",
  authDomain: "shoppingmall-da2a0.firebaseapp.com",
  projectId: "shoppingmall-da2a0",
  storageBucket: "shoppingmall-da2a0.appspot.com",
  messagingSenderId: "528694750913",
  appId: "1:528694750913:web:c538736c25c113fd64ae40",
  measurementId: "G-M793M52XYN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };

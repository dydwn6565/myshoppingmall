// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQo34oR4uHd7DShWvpk1FEhP_PC8ZiqQQ",
  authDomain: "myshoppingmall-7a950.firebaseapp.com",
  projectId: "myshoppingmall-7a950",
  storageBucket: "myshoppingmall-7a950.appspot.com",
  messagingSenderId: "278516290176",
  appId: "1:278516290176:web:653b90ee2b44b14d4c8c65",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSQBVOKSLA5vHZt5XdEPtUsJt3mGX-tsM",
  authDomain: "myshoppingmall-24da2.firebaseapp.com",
  databaseURL: "https://myshoppingmall-24da2-default-rtdb.firebaseio.com",
  projectId: "myshoppingmall-24da2",
  storageBucket: "myshoppingmall-24da2.appspot.com",
  messagingSenderId: "1029623299990",
  appId: "1:1029623299990:web:3f8479cb690ced5d7667b7",
  measurementId: "G-350M9JFBQ9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXs_T570CyPq1PopX-1Xgb-9OYzEq02ns",
  authDomain: "myshoppingmall-8c32e.firebaseapp.com",
  databaseURL: "https://myshoppingmall-8c32e-default-rtdb.firebaseio.com",
  projectId: "myshoppingmall-8c32e",
  storageBucket: "myshoppingmall-8c32e.appspot.com",
  messagingSenderId: "702123191405",
  appId: "1:702123191405:web:663bd49f6f8679a17ba364",
  measurementId: "G-CZ4LQ26QQ9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };

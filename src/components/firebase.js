// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  
  apiKey: "AIzaSyCcmrUkAvpZOfVJgxiakhJfbhbc31IbLVE",
  authDomain: "shoppingmall-47709.firebaseapp.com",
  projectId: "shoppingmall-47709",
  storageBucket: "shoppingmall-47709.appspot.com",
  messagingSenderId: "480055279744",
  appId: "1:480055279744:web:5f57e2f92a8a2caf5fa665",
  measurementId: "G-QNB3L5CCGL"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };

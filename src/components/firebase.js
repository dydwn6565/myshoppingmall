// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6m6KYuiRJ5iy7KKvf1TL9YRGp_yZj3hs",
  authDomain: "myshoppingmall-1a08b.firebaseapp.com",
  projectId: "myshoppingmall-1a08b",
  storageBucket: "myshoppingmall-1a08b.appspot.com",
  messagingSenderId: "1033834279662",
  appId: "1:1033834279662:web:16e53c5d3db455652af9ff",
  measurementId: "G-GLX4BH1L8V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };

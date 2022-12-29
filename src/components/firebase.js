// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyABH7vSa1B4DRIlnuRzWOYbW_WfSZPfspU",
  authDomain: "myshoppingmall-5ad0d.firebaseapp.com",
  projectId: "myshoppingmall-5ad0d",
  storageBucket: "myshoppingmall-5ad0d.appspot.com",
  messagingSenderId: "365496060945",
  appId: "1:365496060945:web:24a857d4f20cff397775b0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };

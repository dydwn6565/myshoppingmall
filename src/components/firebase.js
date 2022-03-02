// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADfUqNNjxBKZv8uI65pf6h3bI8lBfCdUc",
  authDomain: "myshoppingmalls.firebaseapp.com",
  projectId: "myshoppingmalls",
  storageBucket: "myshoppingmalls.appspot.com",
  messagingSenderId: "498033511403",
  appId: "1:498033511403:web:8ce524a298cfdd0499a7ae",
  measurementId: "G-74TTPPEM1E",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };

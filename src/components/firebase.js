// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmUVhrDiCj1kZ7NyWtXecdrDzcSqJJmnU",
  authDomain: "myshoppingmall-9ba19.firebaseapp.com",
  projectId: "myshoppingmall-9ba19",
  storageBucket: "myshoppingmall-9ba19.appspot.com",
  messagingSenderId: "602470703698",
  appId: "1:602470703698:web:f9a6381ef2720e71a8358b",
  measurementId: "G-78GD9686K7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };

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
  apiKey: "AIzaSyB0TjiN4LeXryTJaYbF_ar_owPFjNPt0Yk",
  authDomain: "myshoppingmall-743fd.firebaseapp.com",
  projectId: "myshoppingmall-743fd",
  storageBucket: "myshoppingmall-743fd.appspot.com",
  messagingSenderId: "937075886604",
  appId: "1:937075886604:web:a803ff4880d8e9ff49fc29",
  measurementId: "${config.measurementId}",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };

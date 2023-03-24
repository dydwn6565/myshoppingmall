// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuiQDNcNJ_VOvw2n9RuTmWUkvdb9E0UyI",
  authDomain: "myshoppingmall-95371.firebaseapp.com",
  projectId: "myshoppingmall-95371",
  storageBucket: "myshoppingmall-95371.appspot.com",
  messagingSenderId: "970545482508",
  appId: "1:970545482508:web:7e2bae941b5ca642e99729",
  measurementId: "G-RL8TNGT07W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };

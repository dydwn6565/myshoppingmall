// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCC2-cnprUIBLNNmHLdVqkNfYcFlkO_0as",
  authDomain: "shoppingmall-728f7.firebaseapp.com",
  projectId: "shoppingmall-728f7",
  storageBucket: "shoppingmall-728f7.appspot.com",
  messagingSenderId: "588377441686",
  appId: "1:588377441686:web:7a91f1d2cb79c5a0b489b7",
  measurementId: "G-75CZYJNRZ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };

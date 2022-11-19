// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
 apiKey: "AIzaSyBUsi6IL4ZrU51t9AGolXc8OkRQr_84Lrw",
  authDomain: "myshoppingmall-915ff.firebaseapp.com",
  databaseURL: "https://myshoppingmall-915ff-default-rtdb.firebaseio.com",
  projectId: "myshoppingmall-915ff",
  storageBucket: "myshoppingmall-915ff.appspot.com",
  messagingSenderId: "742835724596",
  appId: "1:742835724596:web:b26a2c854498173be44561",
  measurementId: "G-XR9E9TRBCR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };

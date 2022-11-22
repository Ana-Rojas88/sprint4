// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBPkTpIepsF_1QRBVKr3NCtdMDhtj4u24",
  authDomain: "sprint4-59307.firebaseapp.com",
  projectId: "sprint4-59307",
  storageBucket: "sprint4-59307.appspot.com",
  messagingSenderId: "1036676715559",
  appId: "1:1036676715559:web:36eb450ffbfb6ad63aaa02",
  measurementId: "G-9S87H8CHB8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const dataBase = getFirestore(app);
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();
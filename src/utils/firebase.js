// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDukTtuPppABjwlrdB3R_vbkyqUBSbYkEI",
  authDomain: "netflixgpt-d2a1d.firebaseapp.com",
  projectId: "netflixgpt-d2a1d",
  storageBucket: "netflixgpt-d2a1d.appspot.com",
  messagingSenderId: "777561866952",
  appId: "1:777561866952:web:6b3e984a1f29fccfe59bfd",
  measurementId: "G-7L0YH0WMML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

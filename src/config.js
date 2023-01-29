// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6c1PuNpo5aK_NANGrv30aKYUFbtkzobc",
  authDomain: "lilypad-179ba.firebaseapp.com",
  projectId: "lilypad-179ba",
  storageBucket: "lilypad-179ba.appspot.com",
  messagingSenderId: "357171684106",
  appId: "1:357171684106:web:8a56bb33a320415a4e50f3",
  measurementId: "G-SB7F1KPZ3P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
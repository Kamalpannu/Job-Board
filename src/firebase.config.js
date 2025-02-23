// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8a4F8aJC-4PHgqBcikiDyheKLSgqBL6s",
  authDomain: "indeed-43c29.firebaseapp.com",
  projectId: "indeed-43c29",
  storageBucket: "indeed-43c29.firebasestorage.app",
  messagingSenderId: "402716943277",
  appId: "1:402716943277:web:dceaecc6bbeb0cd2713724",
  measurementId: "G-0F77TWB3N1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=getFirestore(app);

export {db};
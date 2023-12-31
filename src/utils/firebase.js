// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSnmu3g7p9qEjzgSwBYKlUI60eLc_y0M0",
  authDomain: "netflix-8a671.firebaseapp.com",
  projectId: "netflix-8a671",
  storageBucket: "netflix-8a671.appspot.com",
  messagingSenderId: "930009275770",
  appId: "1:930009275770:web:1363be2162c1356c84cac3",
  measurementId: "G-5X4FV7VP33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth= getAuth();
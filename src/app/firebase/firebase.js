// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsGg6fAyJFamIipTz66s4LEBlRx_JKJts",
  authDomain: "nike-shop-d8f68.firebaseapp.com",
  projectId: "nike-shop-d8f68",
  storageBucket: "nike-shop-d8f68.appspot.com",
  messagingSenderId: "25890916182",
  appId: "1:25890916182:web:4f1b1d48136fb2a33d38f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };

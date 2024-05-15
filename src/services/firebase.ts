// Import the functions you need from the SDKs you need
import {getApp,getApps,initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-x-UTk2BiXcf0fEC1BAzExSaWQDQJPRM",
  authDomain: "fir-auth-33aba.firebaseapp.com",
  projectId: "fir-auth-33aba",
  storageBucket: "fir-auth-33aba.appspot.com",
  messagingSenderId: "168614842596",
  appId: "1:168614842596:web:17b8f095b42fca177e9cf1"
};

// Initialize Firebase
const app =getApps.length >0? getApp(): initializeApp(firebaseConfig);
export const auth = getAuth(app);
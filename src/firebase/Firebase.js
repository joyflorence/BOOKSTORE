// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoQ6Pt5amsNS1C4oe4Hjw93FJhkAsCVo0",
  authDomain: "bookworm-db88d.firebaseapp.com",
  projectId: "bookworm-db88d",
  storageBucket: "bookworm-db88d.appspot.com",
  messagingSenderId: "839428835008",
  appId: "1:839428835008:web:1df036abd980adae31cf25",
  measurementId: "G-SDLSSPK6Z3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;
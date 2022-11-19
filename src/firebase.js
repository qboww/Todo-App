// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVVAWdnjlBTg3ZycEQhMF3QbtGlz-IAbo",
  authDomain: "react-todo-8e6b9.firebaseapp.com",
  projectId: "react-todo-8e6b9",
  storageBucket: "react-todo-8e6b9.appspot.com",
  messagingSenderId: "718141680875",
  appId: "1:718141680875:web:d0ea94852ec351d24c22ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
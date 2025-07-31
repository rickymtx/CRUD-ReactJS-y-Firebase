// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK2SvV9fXa0piox0mnoqQioseG5MZt7pY",
  authDomain: "crud-6ff4f.firebaseapp.com",
  projectId: "crud-6ff4f",
  storageBucket: "crud-6ff4f.firebasestorage.app",
  messagingSenderId: "82296149081",
  appId: "1:82296149081:web:b78e8eda119aade2ae0d48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2Tm-7lNPZxDKobMAdrRWM8j4PHriD2zM",
  authDomain: "snapurl-d3e73.firebaseapp.com",
  projectId: "snapurl-d3e73",
  storageBucket: "snapurl-d3e73.appspot.com",
  messagingSenderId: "542578267724",
  appId: "1:542578267724:web:50c8b1ad15bc71f63d06e9",
  measurementId: "G-H5C57BLHS9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

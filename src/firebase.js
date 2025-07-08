// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBjtefHVmoqVY4AWY_WXUaihSAYg2iAKA0",
  authDomain: "personal-website-generator.firebaseapp.com",
  projectId: "personal-website-generator",
  storageBucket: "personal-website-generator.firebasestorage.app",
  messagingSenderId: "782318621428",
  appId: "1:782318621428:web:1c8c84377b83aab9acc4a1",
  measurementId: "G-R11DLJLS4Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

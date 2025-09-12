import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Operator must replace with the actual Firebase project configuration.
const firebaseConfig = {
  apiKey: "AIzaSyBz3dGJxTBzRNy6u8aHpsBpSQ7DSHPAJN0",
  authDomain: "saas-factory-b8b55.firebaseapp.com",
  projectId: "saas-factory-b8b55",
  storageBucket: "saas-factory-b8b55.firebasestorage.app",
  messagingSenderId: "497421049622",
  appId: "1:497421049622:web:85c90a7c97b34b38e83a37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
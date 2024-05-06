// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmczIoxtrWFFRfhJCmD5PLjPZzgy45tBc",
  authDomain: "emailpasswordlogin-bf4c8.firebaseapp.com",
  projectId: "emailpasswordlogin-bf4c8",
  storageBucket: "emailpasswordlogin-bf4c8.appspot.com",
  messagingSenderId: "385636095348",
  appId: "1:385636095348:web:750c6a3c2ab970b5098821",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeoqAcgM1xho3x40qw64n68eZwdBBo36Y",
  authDomain: "auth-rm.firebaseapp.com",
  projectId: "auth-rm",
  storageBucket: "auth-rm.appspot.com",
  messagingSenderId: "98545039995",
  appId: "1:98545039995:web:b4673976102887e5c700de",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

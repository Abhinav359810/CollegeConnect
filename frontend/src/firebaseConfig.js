import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyA-o7DlcgB7omRzUpzY-Mjj5hOOoLh-oYc",
  authDomain: "collegeconnect-9b7dd.firebaseapp.com",
  projectId: "collegeconnect-9b7dd",
  storageBucket: "collegeconnect-9b7dd.appspot.com",
  messagingSenderId: "383573246950",
  appId: "1:383573246950:web:2279c8f09e35dc4e428c27",
  measurementId: "G-5YRNSQRLBL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

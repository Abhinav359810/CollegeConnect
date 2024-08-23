// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyA-o7DlcgB7omRzUpzY-Mjj5hOOoLh-oYc",
    authDomain: "collegeconnect-9b7dd.firebaseapp.com",
    projectId: "collegeconnect-9b7dd",
    storageBucket: "collegeconnect-9b7dd.appspot.com",
    messagingSenderId: "383573246950",
    appId: "1:383573246950:web:2279c8f09e35dc4e428c27",
    measurementId: "G-5YRNSQRLBL"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};
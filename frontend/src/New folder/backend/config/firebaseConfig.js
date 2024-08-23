// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const admin = require('firebase-admin');
const dotenv = require('dotenv');

dotenv.config();

const serviceAccount = {
    apiKey: "AIzaSyA-o7DlcgB7omRzUpzY-Mjjś5hOOoLh-oYc",
    authDomain: "collegeconnect-9b7dd.firebaseapp.com",
    projectId: "collegeconnect-9b7dd",
    storageBucket: "collegeconnect-9b7dd.appspot.com",
    messagingSenderId: "383573246950",
    appId: "1:383573246950:web:2279c8f09e35dc4e428c27",
    measurementId: "G-5YRNSQRLBL"
};

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://your-project-id.firebaseio.com"
  });
  
  // Firestore Database instance
  const db = admin.firestore();
  
  module.exports = { admin, db };
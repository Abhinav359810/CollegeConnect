// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyDd8tdkqqcxiCNQBgcwrBoetUNPCzBRzoE",
  authDomain: "college-connect-2c4b9.firebaseapp.com",
  projectId: "college-connect-2c4b9",
  storageBucket: "college-connect-2c4b9.appspot.com",
  messagingSenderId: "507274255914",
  appId: "1:507274255914:web:e1e060f229e8a9fc822d53",
  measurementId: "G-CDS9TNSTLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
export const auth = getAuth(app);
export const firestore = getFirestore(app); // Export Firestore

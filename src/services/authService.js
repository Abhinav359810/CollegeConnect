// src/services/authService.js
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, firestore } from '../firebase'; // Ensure correct import paths
import { doc, setDoc } from 'firebase/firestore';

export const registerUser = async (email, password, role) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Create a profile document in Firestore with the user role
    const userRef = doc(firestore, `users/${user.uid}/profile`);
    await setDoc(userRef, { role });

    console.log('User registered successfully');
  } catch (error) {
    console.error('Error registering user:', error);
    throw error; // Ensure errors are properly thrown for handling
  }
};

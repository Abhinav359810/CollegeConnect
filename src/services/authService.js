// src/services/authService.js
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, firestore } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';

export const registerUser = async (email, password, role) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Store the user role directly in the 'users' collection
    const userRef = doc(firestore, `users/${user.uid}`);
    await setDoc(userRef, { role });

    console.log('User registered successfully');
    return user; // Ensure the user object is returned
  } catch (error) {
    console.error('Error registering user:', error);
    throw error; // Throw error to be handled by the caller
  }
};

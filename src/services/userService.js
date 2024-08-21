// src/services/userService.js
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { firestore } from '../firebase'; // Import firestore

// Function to set a user's role in Firestore
export const setUserRole = async (userId, role) => {
  try {
    // Reference to the user's profile document in Firestore
    const userRef = doc(firestore, `users/${userId}/profile`);
    
    // Set the role in the user's profile document
    await setDoc(userRef, { role });
    
    console.log('User role set successfully');
  } catch (error) {
    // Log error if something goes wrong
    console.error('Error setting user role:', error);
  }
};

// Function to get a user's role from Firestore
export const getUserRole = async (userId) => {
  try {
    // Reference to the user's profile document in Firestore
    const userRef = doc(firestore, `users/${userId}/profile`);
    
    // Get the document snapshot
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
      // Return the user's role if the document exists
      return docSnap.data().role;
    } else {
      // Throw an error if the document does not exist
      throw new Error('No such document!');
    }
  } catch (error) {
    // Log error if something goes wrong
    console.error('Error getting user role:', error);
    throw error; // Re-throw error to be handled by the caller
  }
};

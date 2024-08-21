// src/services/userService.js
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { firestore } from '../firebase'; // Import Firestore instance

// Function to set a user's role in Firestore
export const setUserRole = async (userId, role) => {
  try {
    // Create a reference to the user's document in the 'users' collection
    const userRef = doc(firestore, `users/${userId}`);
    
    // Set the role field in the user's document
    await setDoc(userRef, { role });
    
    console.log('User role set successfully');
  } catch (error) {
    // Log the error if setting the user role fails
    console.error('Error setting user role:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};

// Function to get a user's role from Firestore
export const getUserRole = async (userId) => {
  try {
    // Create a reference to the user's document in the 'users' collection
    const userRef = doc(firestore, `users/${userId}`);
    
    // Fetch the document snapshot from Firestore
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
      // Return the user's role if the document exists
      return docSnap.data().role;
    } else {
      // Throw an error if the document does not exist
      throw new Error('No such document!');
    }
  } catch (error) {
    // Log the error if getting the user role fails
    console.error('Error getting user role:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};

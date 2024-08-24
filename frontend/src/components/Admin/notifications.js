import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const sendNotification = async (title, message, recipients) => {
  try {
    await addDoc(collection(db, 'notifications'), {
      title,
      message,
      recipients,
      timestamp: new Date(),
    });
  } catch (error) {
    console.error('Error sending notification:', error);
  }
};

export const getNotifications = async (role) => {
  try {
    const notificationsRef = collection(db, 'notifications');
    const q = query(notificationsRef, where('recipients', 'array-contains', role));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => doc.data());
  } catch (error) {
    console.error('Error fetching notifications:', error);
  }
};

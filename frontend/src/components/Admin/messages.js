import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const sendMessage = async (sender, recipient, content) => {
  try {
    await addDoc(collection(db, 'messages'), {
      sender,
      recipient,
      content,
      timestamp: new Date(),
    });
  } catch (error) {
    console.error('Error sending message:', error);
  }
};

export const getMessages = async (sender, recipient) => {
  try {
    const messagesRef = collection(db, 'messages');
    const q = query(
      messagesRef,
      where('sender', 'in', [sender, recipient]),
      where('recipient', 'in', [sender, recipient])
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => doc.data());
  } catch (error) {
    console.error('Error fetching messages:', error);
  }
};

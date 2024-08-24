import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import { collection, getDocs, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const AdminMessaging = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const messagesCollection = collection(db, 'messages');
        const messagesSnapshot = await getDocs(messagesCollection);
        const messagesList = messagesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setMessages(messagesList);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  const handleSend = async () => {
    try {
      const messagesCollection = collection(db, 'messages');
      await addDoc(messagesCollection, {
        text: newMessage,
        timestamp: Timestamp.now(),
      });
      setNewMessage('');
      // Refetch messages after sending
      const messagesSnapshot = await getDocs(messagesCollection);
      const messagesList = messagesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMessages(messagesList);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <Box sx={{ p: 7 }}>
      <Typography variant="h4" gutterBottom>
        Messaging
      </Typography>
      <Box>
        <TextField
          label="New Message"
          fullWidth
          multiline
          rows={4}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSend} sx={{ mt: 2 }}>
          Send
        </Button>
      </Box>
      <List>
        {messages.map((message) => (
          <ListItem key={message.id}>
            <ListItemText primary={message.text} secondary={message.timestamp?.toDate().toLocaleString()} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AdminMessaging;

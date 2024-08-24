import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const AdminNotifications = () => {
  const [text, setText] = useState('');
  const [targetRole, setTargetRole] = useState('');

  const handleSend = async () => {
    try {
      const notificationsCollection = collection(db, 'notifications');
      await addDoc(notificationsCollection, {
        text,
        timestamp: Timestamp.now(),
        targetRole, // 'student' or 'teacher'
      });
      setText('');
      setTargetRole('');
      alert('Notification sent successfully');
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Send Notification
      </Typography>
      <TextField
        label="Notification Text"
        fullWidth
        multiline
        rows={4}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <TextField
        label="Target Role (student/teacher)"
        fullWidth
        value={targetRole}
        onChange={(e) => setTargetRole(e.target.value)}
        sx={{ mt: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleSend} sx={{ mt: 2 }}>
        Send Notification
      </Button>
    </Box>
  );
};

export default AdminNotifications;

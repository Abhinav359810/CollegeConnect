import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Snackbar, Alert } from '@mui/material';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const AdminNotifications = () => {
  const [text, setText] = useState('');
  const [targetRole, setTargetRole] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleSend = async () => {
    try {
      const notificationsCollection = collection(db, 'notifications');
      await addDoc(notificationsCollection, {
        text,
        timestamp: Timestamp.now(),
        targetRole, // 'student' or 'teacher'
        sender: 'Admin Name', // Replace with dynamic admin name if available
      });
      setText('');
      setTargetRole('');
      setSnackbarMessage('Notification sent successfully');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
    } catch (error) {
      console.error('Error sending notification:', error);
      setSnackbarMessage('Error sending notification');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  return (
    <Box sx={{ p: 7 }}>
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
        select
        label="Target Role"
        fullWidth
        value={targetRole}
        onChange={(e) => setTargetRole(e.target.value)}
        sx={{ mt: 2 }}
        SelectProps={{
          native: true,
        }}
      >
        <option value="">Select Role</option>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
      </TextField>
      <Button variant="contained" color="primary" onClick={handleSend} sx={{ mt: 2 }}>
        Send Notification
      </Button>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AdminNotifications;

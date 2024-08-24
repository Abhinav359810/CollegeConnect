// src/components/Teacher/TeacherNotifications.js
import React, { useState, useEffect } from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';  // Make sure your Firebase configuration is correctly imported

const TeacherNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const notificationsCollection = collection(db, 'notifications');
        const q = query(notificationsCollection, where('targetRole', '==', 'teacher'));
        const notificationsSnapshot = await getDocs(q);
        const notificationsList = notificationsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setNotifications(notificationsList);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Teacher Notifications
      </Typography>
      <List>
        {notifications.map(notification => (
          <ListItem key={notification.id}>
            <ListItemText
              primary={notification.text}
              secondary={notification.timestamp?.toDate().toLocaleString()}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TeacherNotifications;

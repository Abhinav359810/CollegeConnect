import React, { useState, useEffect } from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const StudentNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true); // To track the loading state

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const notificationsCollection = collection(db, 'notifications');
        const q = query(notificationsCollection, where('targetRole', '==', 'student'));
        const notificationsSnapshot = await getDocs(q);
        const notificationsList = notificationsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log('Fetched notifications:', notificationsList); // Debug log
        setNotifications(notificationsList);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching notifications:', error);
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  if (loading) {
    return <Typography>Loading notifications...</Typography>; // Display loading message while fetching
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Student Notifications
      </Typography>
      <List>
        {notifications.length > 0 ? (
          notifications.map(notification => (
            <ListItem key={notification.id}>
              <ListItemText
                primary={notification.text}
                secondary={notification.timestamp?.toDate().toLocaleString()}
              />
            </ListItem>
          ))
        ) : (
          <Typography>No notifications available.</Typography> // Show a message if there are no notifications
        )}
      </List>
    </Box>
  );
};

export default StudentNotifications;

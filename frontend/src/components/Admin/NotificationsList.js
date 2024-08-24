import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { getNotifications } from '../../notifications';

const NotificationsList = ({ role }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const data = await getNotifications(role);
      setNotifications(data);
    };

    fetchNotifications();
  }, [role]);

  return (
    <Container>
      <Typography variant="h4">Notifications</Typography>
      {notifications.map((notification, index) => (
        <Paper key={index} sx={{ padding: 2, marginTop: 2 }}>
          <Typography variant="h6">{notification.text}</Typography>
          <Typography>From: {notification.sender}</Typography> {/* Display sender */}
          <Typography>{notification.timestamp.toDate().toLocaleString()}</Typography>
        </Paper>
      ))}
    </Container>
  );
};

export default NotificationsList;

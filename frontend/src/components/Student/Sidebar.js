import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material'; // Import Box here
import { Home, School, People, Assessment, Event, Notifications } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Box sx={{ height: '100vh', width: '250px', backgroundColor: '#f5f5f5', padding: '20px', overflowY: 'auto' }}>
      <List>
        <ListItem button component={Link} to="/student-dashboard/">
          <ListItemIcon><Home /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/student-dashboard/students">
          <ListItemIcon><People /></ListItemIcon>
          <ListItemText primary="Students" />
        </ListItem>
        <ListItem button component={Link} to="/student-dashboard/faculty">
          <ListItemIcon><School /></ListItemIcon>
          <ListItemText primary="Faculty" />
        </ListItem>
        <ListItem button component={Link} to="/student-dashboard/courses">
          <ListItemIcon><Assessment /></ListItemIcon>
          <ListItemText primary="Courses" />
        </ListItem>
        <ListItem button component={Link} to="/student-dashboard/events">
          <ListItemIcon><Event /></ListItemIcon>
          <ListItemText primary="Events" />
        </ListItem>
        <ListItem button component={Link} to="/student-dashboard/notifications">
          <ListItemIcon><Notifications /></ListItemIcon>
          <ListItemText primary="Notifications" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;

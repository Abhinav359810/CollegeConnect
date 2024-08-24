// src/components/Teacher/Sidebar.js
import React from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ width: '240px', backgroundColor: '#f5f5f5', padding: '20px', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
      <List>
        <ListItem button component={Link} to="/teacher-dashboard/home">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/teacher-dashboard/profile">
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button component={Link} to="/teacher-dashboard/settings">
          <ListItemText primary="Settings" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/teacher-dashboard/courses">
          <ListItemText primary="Courses" />
        </ListItem>
        <ListItem button component={Link} to="/teacher-dashboard/assignments">
          <ListItemText primary="Assignments" />
        </ListItem>
        <ListItem button component={Link} to="/teacher-dashboard/resources">
          <ListItemText primary="Resources" />
        </ListItem>
        <ListItem button component={Link} to="/teacher-dashboard/notifications">
          <ListItemText primary="Notifications" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;

<<<<<<< HEAD
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { Home, School, People, Assessment, Event, Notifications, Menu } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  const list = () => (
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
=======
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
>>>>>>> fc3e5c285d0faa70d58cbfc8f8326372495667e0
  );

  return (
    <div>
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
        <Menu />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
};

export default Sidebar;
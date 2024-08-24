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
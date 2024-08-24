import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, School, People, Assessment, Event } from '@mui/icons-material';

const Sidebar = () => {
  return (
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
    </List>
  );
};

export default Sidebar;

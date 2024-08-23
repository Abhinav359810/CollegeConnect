import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Divider } from '@mui/material';
import { People, School, Assessment, MonetizationOn } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const AdminSidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Divider />
      <List>
        <ListItem button component={Link} to="/user-management">
          <ListItemIcon><People /></ListItemIcon>
          <ListItemText primary="User Management" />
        </ListItem>
        <ListItem button component={Link} to="/course-management">
          <ListItemIcon><School /></ListItemIcon>
          <ListItemText primary="Course Management" />
        </ListItem>
        <ListItem button component={Link} to="/examination-management">
          <ListItemIcon><Assessment /></ListItemIcon>
          <ListItemText primary="Examination Management" />
        </ListItem>
        <ListItem button component={Link} to="/fee-payment-management">
          <ListItemIcon><MonetizationOn /></ListItemIcon>
          <ListItemText primary="Fee & Payment Management" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default AdminSidebar;

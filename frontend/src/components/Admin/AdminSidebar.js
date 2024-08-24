import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Divider, Tooltip } from '@mui/material';
import { People, School, Assessment, MonetizationOn, Notifications, Message } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const AdminSidebar = ({ open, toggleSidebar }) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { 
          width: drawerWidth, 
          boxSizing: 'border-box',
          backgroundColor: '#e0f7fa', // Light blue background
        },
      }}
    >
      <Toolbar />
      <Divider />
      <List>
        <Tooltip title="Manage Users" arrow>
          <ListItem button component={Link} to="/admin-dashboard/user-management">
            <ListItemIcon><People /></ListItemIcon>
            <ListItemText primary="User Management" />
          </ListItem>
        </Tooltip>
        <Tooltip title="Manage Courses" arrow>
          <ListItem button component={Link} to="/admin-dashboard/course-management">
            <ListItemIcon><School /></ListItemIcon>
            <ListItemText primary="Course Management" />
          </ListItem>
        </Tooltip>
        <Tooltip title="Manage Examinations" arrow>
          <ListItem button component={Link} to="/admin-dashboard/examination-management">
            <ListItemIcon><Assessment /></ListItemIcon>
            <ListItemText primary="Examination Management" />
          </ListItem>
        </Tooltip>
        <Tooltip title="Manage Fees and Payments" arrow>
          <ListItem button component={Link} to="/admin-dashboard/fee-payment-management">
            <ListItemIcon><MonetizationOn /></ListItemIcon>
            <ListItemText primary="Fee & Payment Management" />
          </ListItem>
        </Tooltip>
        <Tooltip title="View Notifications" arrow>
          <ListItem button component={Link} to="/admin-dashboard/notifications">
            <ListItemIcon><Notifications /></ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItem>
        </Tooltip>
        <Tooltip title="Manage Messaging" arrow>
          <ListItem button component={Link} to="/admin-dashboard/messaging">
            <ListItemIcon><Message /></ListItemIcon>
            <ListItemText primary="Messaging" />
          </ListItem>
        </Tooltip>
      </List>
    </Drawer>
  );
};

export default AdminSidebar;

import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Typography, Box, IconButton } from '@mui/material';
import { Home, School, People, Assessment, Event, Notifications, Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const drawerWidth = 280;

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const menuItems = [
    { text: 'Dashboard', icon: <Home />, path: '/student-dashboard/' },
    { text: 'Students', icon: <People />, path: '/student-dashboard/students' },
    { text: 'Faculty', icon: <School />, path: '/student-dashboard/faculty' },
    { text: 'Courses', icon: <Assessment />, path: '/student-dashboard/courses' },
    { text: 'Events', icon: <Event />, path: '/student-dashboard/events' },
    { text: 'Notifications', icon: <Notifications />, path: '/student-dashboard/notifications' },
  ];

  return (
    <>
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer} sx={{ marginLeft: '16px' }}>
        <MenuIcon />
      </IconButton>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#1e1e2d',
            color: '#fff',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Box sx={{ padding: '20px', textAlign: 'center', backgroundColor: '#151521' }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#f5f5f5' }}>
            Student Dashboard
          </Typography>
        </Box>
        <Divider />
        <List>
          {menuItems.map((item, index) => (
            <ListItem button component={Link} to={item.path} key={index} sx={{ '&:hover': { backgroundColor: '#333348' } }}>
              <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;

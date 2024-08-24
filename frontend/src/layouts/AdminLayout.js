import React, { useState } from 'react';
import { Box, Toolbar } from '@mui/material';
import AdminNavbar from '../components/Admin/Navbar';
import AdminSidebar from '../components/Admin/AdminSidebar';

const drawerWidth = 240; // Define the drawer width

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* AdminNavbar at the top */}
      <AdminNavbar toggleSidebar={toggleSidebar} />

      {/* AdminSidebar on the left */}
      <AdminSidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main content area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          paddingLeft: 0, // Ensure no padding on the left side
          paddingTop: 3, // Adjust the top padding as needed
          marginLeft: sidebarOpen ? `${drawerWidth}px` : '0', // Ensure the content aligns with the sidebar
          transition: (theme) =>
            theme.transitions.create(['margin-left', 'padding-left'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default AdminLayout;

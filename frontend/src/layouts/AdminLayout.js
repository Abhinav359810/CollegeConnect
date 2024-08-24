import React, { useState } from 'react';
import { Box, Toolbar } from '@mui/material';
import AdminNavbar from '../components/Admin/Navbar';
import AdminSidebar from '../components/Admin/AdminSidebar';

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* AdminNavbar at the top */}
      <AdminNavbar toggleSidebar={toggleSidebar} />

      {/* AdminSidebar on the left */}
      <AdminSidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main content area */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default AdminLayout;

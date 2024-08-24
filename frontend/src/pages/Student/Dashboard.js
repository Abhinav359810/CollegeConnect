import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import Sidebar from '../../components/Student/Sidebar'; // Import Sidebar component

const Dashboard = () => {
  return (
    <Grid container>
      {/* Sidebar Section */}
      <Grid item xs={12} md={3} lg={2}>
        <Sidebar />
      </Grid>

      {/* Main Content Section */}
      <Grid item xs={12} md={9} lg={10}>
        <Box sx={{ p: 3 }}>
          <Typography variant="h4" gutterBottom>
            Student Dashboard
          </Typography>

          {/* Stats Section */}
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center' }}>
                <Typography variant="h6">Total Students</Typography>
                <Typography variant="h4" sx={{ color: '#1976d2' }}>1,234</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center' }}>
                <Typography variant="h6">Total Faculty</Typography>
                <Typography variant="h4" sx={{ color: '#1976d2' }}>123</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center' }}>
                <Typography variant="h6">Active Courses</Typography>
                <Typography variant="h4" sx={{ color: '#1976d2' }}>25</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center' }}>
                <Typography variant="h6">Upcoming Events</Typography>
                <Typography variant="h4" sx={{ color: '#1976d2' }}>4</Typography>
              </Paper>
            </Grid>
          </Grid>
<<<<<<< HEAD

          {/* Notifications Section */}
         
=======
>>>>>>> fc3e5c285d0faa70d58cbfc8f8326372495667e0
        </Box>
      </Grid>
    </Grid>
  );
};

export default Dashboard;

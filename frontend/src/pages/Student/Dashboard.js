import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import StudentNotifications from '../../components/Student/StudentNotifications'; // Import your notifications component

const Dashboard = () => {
  return (
    <Grid container>
      {/* Sidebar Section */}
      <Grid item xs={12} md={3} lg={2}>
        <Box sx={{ height: '100vh', backgroundColor: '#f5f5f5', padding: '20px' }}>
  
        </Box>
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

          {/* Notifications Section */}
          <Box mt={4}>
            <StudentNotifications />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Dashboard;

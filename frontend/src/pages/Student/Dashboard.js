import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h6">Total Students</Typography>
          <Typography variant="h4">1,234</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h6">Total Faculty</Typography>
          <Typography variant="h4">123</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h6">Active Courses</Typography>
          <Typography variant="h4">25</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h6">Upcoming Events</Typography>
          <Typography variant="h4">4</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;

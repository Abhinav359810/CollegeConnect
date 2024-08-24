import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Teacher/Navigation.js';
import TeacherNotifications from '../../components/Teacher/TeacherNotifications'; // Import the notifications component
import { Box, Typography, Paper } from '@mui/material';

function TeacherDashboard() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <header style={{ padding: '20px', backgroundColor: '#f5f5f5', borderBottom: '1px solid #ddd' }}>
        <Typography variant="h4">Teacher Dashboard</Typography>
        <Navigation /> {/* Include the Navigation component */}
        <nav style={{ marginTop: '10px' }}>
          <Link to="/teacher-dashboard/home" style={{ marginRight: '10px' }}>Home</Link>
          <Link to="/teacher-dashboard/profile" style={{ marginRight: '10px' }}>Profile</Link>
          <Link to="/teacher-dashboard/settings">Settings</Link>
        </nav>
      </header>
      <main style={{ flex: 1, padding: '20px' }}>
        <section style={{ marginBottom: '20px' }}>
          <Typography variant="h6" gutterBottom>Course Management</Typography>
          <Box sx={{ display: 'flex', gap: '20px' }}>
            <Paper elevation={3} sx={{ padding: '20px', flex: 1 }}>
              <Typography variant="h6">Manage Courses</Typography>
              <Typography variant="body1">Upload course materials, create assignments, and manage grades.</Typography>
            </Paper>
            <Paper elevation={3} sx={{ padding: '20px', flex: 1 }}>
              <Typography variant="h6">Student Performance</Typography>
              <Typography variant="body1">Analytics on student progress and participation.</Typography>
            </Paper>
          </Box>
        </section>
        <section style={{ marginBottom: '20px' }}>
          <Typography variant="h6" gutterBottom>Assignments</Typography>
          <Box sx={{ display: 'flex', gap: '20px' }}>
            <Paper elevation={3} sx={{ padding: '20px', flex: 1 }}>
              <Typography variant="h6">Review Submissions</Typography>
              <Typography variant="body1">View and grade student assignments.</Typography>
            </Paper>
            <Paper elevation={3} sx={{ padding: '20px', flex: 1 }}>
              <Typography variant="h6">Feedback Tools</Typography>
              <Typography variant="body1">Provide feedback to students.</Typography>
            </Paper>
          </Box>
        </section>
        <section style={{ marginBottom: '20px' }}>
          <Typography variant="h6" gutterBottom>Resources</Typography>
          <Box sx={{ display: 'flex', gap: '20px' }}>
            <Paper elevation={3} sx={{ padding: '20px', flex: 1 }}>
              <Typography variant="h6">Resource Sharing</Typography>
              <Typography variant="body1">Share supplementary materials like articles and videos.</Typography>
            </Paper>
            <Paper elevation={3} sx={{ padding: '20px', flex: 1 }}>
              <Typography variant="h6">Collaborative Projects</Typography>
              <Typography variant="body1">Create and manage group projects.</Typography>
            </Paper>
          </Box>
        </section>

        {/* Notifications Section */}
        <section>
          <Typography variant="h6" gutterBottom>Notifications</Typography>
          <TeacherNotifications /> {/* Include the TeacherNotifications component */}
        </section>
      </main>
      <footer style={{ padding: '10px', backgroundColor: '#f5f5f5', borderTop: '1px solid #ddd', textAlign: 'center' }}>
        <Typography variant="body2">&copy; 2024 CampusConnect. All rights reserved.</Typography>
      </footer>
    </Box>
  );
}

export default TeacherDashboard;

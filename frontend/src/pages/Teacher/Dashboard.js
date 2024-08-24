import React, { useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import Navigation from '../../components/Teacher/Navigation.js';
import TeacherNotifications from '../../components/Teacher/TeacherNotifications';
import Sidebar from '../../components/Teacher/Sidebar'; // Import the Sidebar component
import QuestionList from '../../components/Teacher/QuestionList'; // Import QuestionList component
import AnswerSection from '../../components/Teacher/AnswerSection'; // Import AnswerSection component
import TaggingSystem from '../../components/Teacher/TaggingSystem'; // Import TaggingSystem component
import SearchFunctionality from '../../components/Teacher/SearchFunctionality'; // Import SearchFunctionality component

function TeacherDashboard() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Sidebar /> {/* Include the Sidebar component */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <header style={{ padding: '20px', backgroundColor: '#f5f5f5', borderBottom: '1px solid #ddd' }}>
          <Typography variant="h4">Teacher Dashboard</Typography>
          <Navigation /> {/* Include the Navigation component */}
          <nav style={{ marginTop: '10px' }}>
            <a href="/teacher-dashboard/home" style={{ marginRight: '10px' }}>Home</a>
            <a href="/teacher-dashboard/profile" style={{ marginRight: '10px' }}>Profile</a>
            <a href="/teacher-dashboard/settings">Settings</a>
          </nav>
        </header>
        <main style={{ flex: 1, padding: '20px' }}>
          {/* Course Management Section */}
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

          {/* Assignments Section */}
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

          {/* Resources Section */}
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

          {/* Q&A Forum Section */}
          <section style={{ marginBottom: '20px' }}>
            <Typography variant="h6" gutterBottom>Q&A Forum</Typography>
            <SearchFunctionality onSelectQuestion={setSelectedQuestion} />
            <QuestionList onSelectQuestion={setSelectedQuestion} />
            {selectedQuestion && (
              <>
                <AnswerSection selectedQuestion={selectedQuestion} />
                <TaggingSystem selectedQuestion={selectedQuestion} />
              </>
            )}
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
    </Box>
  );
}

export default TeacherDashboard;

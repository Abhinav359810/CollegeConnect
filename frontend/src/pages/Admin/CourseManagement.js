import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography, Button, Box } from '@mui/material';
import { People, School } from '@mui/icons-material';
import { collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const AdminDashboard = () => {
  const [numberOfStudents, setNumberOfStudents] = useState(0);
  const [numberOfTeachers, setNumberOfTeachers] = useState(0);
  const [pendingStudents, setPendingStudents] = useState([]);
  const [pendingTeachers, setPendingTeachers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch total counts for students and teachers
        const studentsSnapshot = await getDocs(collection(db, 'students'));
        const teachersSnapshot = await getDocs(collection(db, 'teachers'));

        setNumberOfStudents(studentsSnapshot.size);
        setNumberOfTeachers(teachersSnapshot.size);

        // Fetch pending students
        const pendingStudentsSnapshot = await getDocs(collection(db, 'Pending', 'student', 'students'));
        const pendingStudentsData = pendingStudentsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPendingStudents(pendingStudentsData);

        // Fetch pending teachers
        const pendingTeachersSnapshot = await getDocs(collection(db, 'Pending', 'teacher', 'teachers'));
        const pendingTeachersData = pendingTeachersSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPendingTeachers(pendingTeachersData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleAccept = async (user, role) => {
    try {
      const userRole = role === 'student' ? 'students' : 'faculty';
      const collegeRef = doc(db, 'colleges', user.collegeId, userRole, user.id);
      const mainCollectionRef = doc(db, userRole, user.id);

      // Add user to the appropriate college subcollection
      await setDoc(collegeRef, user);

      // Add user to the main students/teachers collection
      await setDoc(mainCollectionRef, user);

      // Remove from the Pending collection
      await deleteDoc(doc(db, 'Pending', role, role === 'student' ? 'students' : 'teachers', user.id));

      if (role === 'student') {
        setPendingStudents(pendingStudents.filter(u => u.id !== user.id));
      } else {
        setPendingTeachers(pendingTeachers.filter(u => u.id !== user.id));
      }
    } catch (error) {
      console.error('Error accepting user:', error);
    }
  };

  const handleReject = async (userId, role) => {
    try {
      await deleteDoc(doc(db, 'Pending', role, role === 'student' ? 'students' : 'teachers', userId));
      if (role === 'student') {
        setPendingStudents(pendingStudents.filter(u => u.id !== userId));
      } else {
        setPendingTeachers(pendingTeachers.filter(u => u.id !== userId));
      }
    } catch (error) {
      console.error('Error rejecting user:', error);
    }
  };

  return (
    <Box sx={{ flexGrow: 1, p: 6, ml: `${-260}px` }}> {/* Adjust the marginLeft to align with the sidebar */}
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>

      {/* Display Pending Students */}
      <Typography variant="h6" gutterBottom>
        Pending Students
      </Typography>
      <Grid container spacing={3} sx={{ marginBottom: 3 }}>
        {pendingStudents.map(user => (
          <Grid item xs={12} key={user.id}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box display="flex" alignItems="center" gap={4}>
                  <Typography variant="h6">{user.name}</Typography>
                  <Typography variant="body1">Email: {user.email}</Typography>
                  <Typography variant="body1">College: {user.collegeName}</Typography>
                </Box>
                <Box display="flex" gap={2}>
                  <Button variant="contained" color="primary" onClick={() => handleAccept(user, 'student')}>
                    Accept
                  </Button>
                  <Button variant="contained" color="secondary" onClick={() => handleReject(user.id, 'student')}>
                    Reject
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Display Pending Teachers */}
      <Typography variant="h6" gutterBottom>
        Pending Teachers
      </Typography>
      <Grid container spacing={3} sx={{ marginBottom: 3 }}>
        {pendingTeachers.map(user => (
          <Grid item xs={12} key={user.id}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box display="flex" alignItems="center" gap={4}>
                  <Typography variant="h6">{user.name}</Typography>
                  <Typography variant="body1">Email: {user.email}</Typography>
                  <Typography variant="body1">College: {user.collegeName}</Typography>
                </Box>
                <Box display="flex" gap={2}>
                  <Button variant="contained" color="primary" onClick={() => handleAccept(user, 'teacher')}>
                    Accept
                  </Button>
                  <Button variant="contained" color="secondary" onClick={() => handleReject(user.id, 'teacher')}>
                    Reject
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Box display="flex" alignItems="center">
              <People fontSize="large" sx={{ marginRight: 2, color: '#2196f3' }} />
              <Box>
                <Typography variant="h6">Total Students</Typography>
                <Typography variant="h4">{numberOfStudents}</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Box display="flex" alignItems="center">
              <School fontSize="large" sx={{ marginRight: 2, color: '#4caf50' }} />
              <Box>
                <Typography variant="h6">Total Teachers</Typography>
                <Typography variant="h4">{numberOfTeachers}</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* Additional cards can be added here as needed */}
      </Grid>
    </Box>
  );
};

export default AdminDashboard;

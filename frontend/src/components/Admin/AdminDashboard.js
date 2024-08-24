import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography, Button, Box } from '@mui/material';
import { People, School } from '@mui/icons-material';
import AdminLayout from '../../layouts/AdminLayout.js';
import { collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const AdminDashboard = () => {
  const [numberOfStudents, setNumberOfStudents] = useState(0);
  const [numberOfTeachers, setNumberOfTeachers] = useState(0);
  const [pendingUsers, setPendingUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch students and teachers counts
        const studentsCollection = collection(db, 'students');
        const teachersCollection = collection(db, 'teachers');

        const studentsSnapshot = await getDocs(studentsCollection);
        const teachersSnapshot = await getDocs(teachersCollection);

        setNumberOfStudents(studentsSnapshot.size);
        setNumberOfTeachers(teachersSnapshot.size);

        // Fetch pending users
        const pendingSnapshot = await getDocs(collection(db, 'Pending'));
        const pendingData = pendingSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPendingUsers(pendingData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleAccept = async (user) => {
    try {
      const userRole = user.role === 'student' ? 'students' : 'teachers';
      const collegeRef = doc(db, 'colleges', user.collegeId, userRole, user.id);
      const mainCollectionRef = doc(db, userRole, user.id);

      // Add to the appropriate college subcollection
      await setDoc(collegeRef, user);

      // Add to the main students/teachers collection
      await setDoc(mainCollectionRef, user);

      // Remove from the Pending collection
      await deleteDoc(doc(db, 'Pending', user.id));

      setPendingUsers(pendingUsers.filter((u) => u.id !== user.id));
    } catch (error) {
      console.error('Error accepting user:', error);
    }
  };

  const handleReject = async (userId) => {
    try {
      await deleteDoc(doc(db, 'Pending', userId));
      setPendingUsers(pendingUsers.filter((u) => u.id !== userId));
    } catch (error) {
      console.error('Error rejecting user:', error);
    }
  };

  return (
    <AdminLayout>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Admin Dashboard
        </Typography>

        <Typography variant="h6" gutterBottom>
          Pending Users
        </Typography>
        <Grid container spacing={3} sx={{ marginBottom: 3 }}>
          {pendingUsers.map((user) => (
            <Grid item xs={12} key={user.id}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  <Box display="flex" alignItems="center" gap={4}>
                    <Typography variant="h6">{user.name}</Typography>
                    <Typography variant="body1">Email: {user.email}</Typography>
                    <Typography variant="body1">Role: {user.role}</Typography>
                    <Typography variant="body1">College: {user.collegeName}</Typography>
                  </Box>
                  <Box display="flex" gap={2}>
                    <Button variant="contained" color="primary" onClick={() => handleAccept(user)}>
                      Accept
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() => handleReject(user.id)}>
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
    </AdminLayout>
  );
};

export default AdminDashboard;

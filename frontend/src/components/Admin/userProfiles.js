import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { Box, Typography, TextField, Button, CircularProgress } from '@mui/material';
import { db } from '../../firebaseConfig';

const UserProfile = () => {
  const { userId, collegeId, role } = useParams(); // Extract userId, collegeId, and role from the URL parameters
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userRef = doc(db, 'colleges', collegeId, role === 'student' ? 'students' : 'teachers', userId);
        const userSnapshot = await getDoc(userRef);
        
        if (userSnapshot.exists()) {
          setUserData(userSnapshot.data());
        } else {
          console.error('No such user!');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId, collegeId, role]);

  const handleEditToggle = () => {
    setEditing(!editing);
  };

  const handleSaveChanges = async () => {
    try {
      const userRef = doc(db, 'colleges', collegeId, role === 'student' ? 'students' : 'teachers', userId);
      await updateDoc(userRef, userData);
      setEditing(false);
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Box sx={{ padding: 3, maxWidth: 600, margin: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        {editing ? 'Edit Profile' : 'User Profile'}
      </Typography>
      {userData && (
        <>
          <TextField
            label="Name"
            value={userData.name}
            fullWidth
            margin="normal"
            InputProps={{ readOnly: !editing }}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
          <TextField
            label="Email"
            value={userData.email}
            fullWidth
            margin="normal"
            InputProps={{ readOnly: !editing }}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          />
          <TextField
            label="Role"
            value={userData.role}
            fullWidth
            margin="normal"
            InputProps={{ readOnly: true }}
          />
          <TextField
            label="College"
            value={userData.collegeName}
            fullWidth
            margin="normal"
            InputProps={{ readOnly: true }}
          />
          {editing ? (
            <Button variant="contained" color="primary" onClick={handleSaveChanges} sx={{ mt: 2 }}>
              Save Changes
            </Button>
          ) : (
            <Button variant="contained" color="secondary" onClick={handleEditToggle} sx={{ mt: 2 }}>
              Edit Profile
            </Button>
          )}
        </>
      )}
    </Box>
  );
};

export default UserProfile;

import React, { useEffect, useState } from 'react';
import {
  Grid,
  Paper,
  Typography,
  Button,
  Box,
  IconButton,
  Modal,
  TextField,
  Avatar,
  Container,
} from '@mui/material';
import { Edit, Delete, Visibility, PersonAdd } from '@mui/icons-material';
import { collection, getDocs, deleteDoc, doc, updateDoc, addDoc } from 'firebase/firestore';
import { getAuth, deleteUser, createUserWithEmailAndPassword } from 'firebase/auth';
import { db } from '../../firebaseConfig';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openAddAdminModal, setOpenAddAdminModal] = useState(false);
  const [newAdminEmail, setNewAdminEmail] = useState('');
  const [newAdminPassword, setNewAdminPassword] = useState('');
  const [adminCollegeId, setAdminCollegeId] = useState('admin_college_id'); // Placeholder for admin's college ID

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        if (!adminCollegeId) return;

        const collegeRef = doc(db, 'colleges', adminCollegeId);
        const studentsRef = collection(collegeRef, 'students');
        const teachersRef = collection(collegeRef, 'teachers');

        const studentsSnapshot = await getDocs(studentsRef);
        const teachersSnapshot = await getDocs(teachersRef);

        const usersData = [];

        studentsSnapshot.forEach((doc) => {
          usersData.push({ id: doc.id, role: 'student', ...doc.data(), collegeId: adminCollegeId });
        });

        teachersSnapshot.forEach((doc) => {
          usersData.push({ id: doc.id, role: 'teacher', ...doc.data(), collegeId: adminCollegeId });
        });

        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [adminCollegeId]);

  const handleDelete = async (user) => {
    try {
      const userDocRef = doc(db, 'colleges', user.collegeId, user.role === 'student' ? 'students' : 'teachers', user.id);
      await deleteDoc(userDocRef);

      const auth = getAuth();
      const userToDelete = await auth.getUser(user.id);
      await deleteUser(userToDelete);

      setUsers(users.filter((u) => u.id !== user.id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setOpenEditModal(true);
  };

  const handleAddAdmin = async () => {
    try {
      const auth = getAuth();
      const { user } = await createUserWithEmailAndPassword(auth, newAdminEmail, newAdminPassword);

      await addDoc(collection(db, 'admins'), {
        uid: user.uid,
        email: newAdminEmail,
        role: 'admin',
        collegeId: adminCollegeId,
      });

      setOpenAddAdminModal(false);
      setNewAdminEmail('');
      setNewAdminPassword('');
    } catch (error) {
      console.error('Error adding admin:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        User Management
      </Typography>
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ marginBottom: 2 }}>
        <Button variant="contained" color="primary" startIcon={<PersonAdd />} onClick={() => setOpenAddAdminModal(true)}>
          Add Admin
        </Button>
      </Box>
      <Grid container spacing={3}>
        {users.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box display="flex" alignItems="center">
                  <Avatar sx={{ marginRight: 2 }}>{user.name[0]}</Avatar>
                  <Box>
                    <Typography variant="h6">{user.name}</Typography>
                    <Typography variant="body2">Email: {user.email}</Typography>
                    <Typography variant="body2">Role: {user.role}</Typography>
                    <Typography variant="body2">College: {user.collegeName}</Typography>
                  </Box>
                </Box>
                <Box display="flex" gap={1}>
                  <IconButton onClick={() => handleEdit(user)}>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(user)}>
                    <Delete />
                  </IconButton>
                  <IconButton>
                    <Visibility />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Edit Modal */}
      <Modal open={openEditModal} onClose={() => setOpenEditModal(false)}>
        <Box sx={{ padding: 3, margin: 'auto', marginTop: '10%', maxWidth: 500, backgroundColor: 'white' }}>
          <Typography variant="h6">Edit User</Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            value={selectedUser?.name || ''}
            onChange={(e) => setSelectedUser({ ...selectedUser, name: e.target.value })}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            value={selectedUser?.email || ''}
            onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })}
          />
          <Button variant="contained" color="primary" onClick={() => { /* Add your update logic here */ }}>
            Save
          </Button>
        </Box>
      </Modal>

      {/* Add Admin Modal */}
      <Modal open={openAddAdminModal} onClose={() => setOpenAddAdminModal(false)}>
        <Box sx={{ padding: 3, margin: 'auto', marginTop: '10%', maxWidth: 500, backgroundColor: 'white' }}>
          <Typography variant="h6">Add Admin</Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            value={newAdminEmail}
            onChange={(e) => setNewAdminEmail(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            value={newAdminPassword}
            onChange={(e) => setNewAdminPassword(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleAddAdmin}>
            Add Admin
          </Button>
        </Box>
      </Modal>
    </Container>
  );
};

export default UserManagement;

import React, { useState } from 'react';
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

const UserManagement = () => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openAddAdminModal, setOpenAddAdminModal] = useState(false);
  const [newAdminEmail, setNewAdminEmail] = useState('');
  const [newAdminPassword, setNewAdminPassword] = useState('');

  const users = [
    // Example user data
    { id: '1', name: 'John Doe', email: 'john@example.com', role: 'student', collegeName: 'College A' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'teacher', collegeName: 'College A' },
    // Add more users as needed
  ];

  const handleEdit = (user) => {
    // Handle the edit user logic here
    setOpenEditModal(true);
  };

  const handleDelete = (user) => {
    // Handle the delete user logic here
  };

  const handleAddAdmin = () => {
    // Handle adding a new admin here
    setOpenAddAdminModal(false);
    setNewAdminEmail('');
    setNewAdminPassword('');
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
        <Box sx={{ padding: 10, margin: 'auto', marginTop: '10%', maxWidth: 500, backgroundColor: 'white' }}>
          <Typography variant="h6">Edit User</Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            value={users[0].name}
            onChange={(e) => console.log(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            value={users[0].email}
            onChange={(e) => console.log(e.target.value)}
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

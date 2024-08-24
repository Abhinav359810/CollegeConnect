import React, { useState, useEffect } from 'react';
import {
  Grid,
  Paper,
  Typography,
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from '@mui/material';
import { Add, Edit, Delete, People } from '@mui/icons-material';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const CourseManagement = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [openCourseModal, setOpenCourseModal] = useState(false);
  const [openManageModal, setOpenManageModal] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const courseSnapshot = await getDocs(collection(db, 'courses'));
        const courseList = courseSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCourses(courseList);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const handleAddCourse = () => {
    setSelectedCourse(null);
    setOpenCourseModal(true);
  };

  const handleEditCourse = (course) => {
    setSelectedCourse(course);
    setOpenCourseModal(true);
  };

  const handleDeleteCourse = async (courseId) => {
    try {
      await deleteDoc(doc(db, 'courses', courseId));
      setCourses(courses.filter(course => course.id !== courseId));
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  const handleManageCourse = (course) => {
    setSelectedCourse(course);
    setOpenManageModal(true);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Course Management
      </Typography>
      <Button variant="contained" color="primary" startIcon={<Add />} onClick={handleAddCourse}>
        Add Course
      </Button>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {courses.map(course => (
          <Grid item xs={12} md={6} lg={4} key={course.id}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6">{course.name}</Typography>
              <Typography variant="body1">Course ID: {course.id}</Typography>
              <Box display="flex" justifyContent="space-between" mt={2}>
                <IconButton onClick={() => handleEditCourse(course)}><Edit /></IconButton>
                <IconButton onClick={() => handleDeleteCourse(course.id)}><Delete /></IconButton>
                <IconButton onClick={() => handleManageCourse(course)}><People /></IconButton>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Add/Edit Course Modal */}
      <Modal open={openCourseModal} onClose={() => setOpenCourseModal(false)}>
        <Box sx={{ padding: 3, margin: 'auto', marginTop: '10%', maxWidth: 500, backgroundColor: 'white' }}>
          <Typography variant="h6">{selectedCourse ? 'Edit Course' : 'Add Course'}</Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Course Name"
            value={selectedCourse?.name || ''}
            onChange={(e) => setSelectedCourse({ ...selectedCourse, name: e.target.value })}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Course Description"
            value={selectedCourse?.description || ''}
            onChange={(e) => setSelectedCourse({ ...selectedCourse, description: e.target.value })}
          />
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            {selectedCourse ? 'Update Course' : 'Add Course'}
          </Button>
        </Box>
      </Modal>

      {/* Manage Teachers and Students Modal */}
      <Modal open={openManageModal} onClose={() => setOpenManageModal(false)}>
        <Box sx={{ padding: 3, margin: 'auto', marginTop: '10%', maxWidth: 500, backgroundColor: 'white' }}>
          <Typography variant="h6">Manage {selectedCourse?.name}</Typography>
          <Typography variant="h6">Teachers</Typography>
          <List>
            {/* Replace with dynamic teacher data */}
            <ListItem>
              <ListItemText primary="Dr. Smith" />
              <ListItemSecondaryAction>
                <IconButton><Delete /></IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemText primary="Prof. Johnson" />
              <ListItemSecondaryAction>
                <IconButton><Delete /></IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
          <Typography variant="h6" mt={2}>Students</Typography>
          <List>
            {/* Replace with dynamic student data */}
            <ListItem>
              <ListItemText primary="John Doe" />
              <ListItemSecondaryAction>
                <IconButton><Delete /></IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemText primary="Jane Doe" />
              <ListItemSecondaryAction>
                <IconButton><Delete /></IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Add Teacher/Student
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default CourseManagement;

import React, { useState } from 'react';
import {
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  IconButton,
  Modal,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from '@mui/material';
import { Edit, Delete, Add, Visibility } from '@mui/icons-material';

const ExamManagement = () => {
  const [exams, setExams] = useState([]); // Placeholder for exams data
  const [openModal, setOpenModal] = useState(false);
  const [selectedExam, setSelectedExam] = useState(null);
  const [isViewing, setIsViewing] = useState(false);

  const handleOpenModal = (exam = null, viewOnly = false) => {
    setSelectedExam(exam);
    setIsViewing(viewOnly);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedExam(null);
    setIsViewing(false);
  };

  const handleAddOrEditExam = () => {
    // Add logic to add or edit exam
    handleCloseModal();
  };

  const handleDeleteExam = (examId) => {
    // Add logic to delete exam
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Exam Management
      </Typography>

      <Grid container spacing={2} justifyContent="flex-end" sx={{ marginBottom: 2 }}>
        <Grid item>
          <Button variant="contained" color="primary" startIcon={<Add />} onClick={() => handleOpenModal()}>
            Add Exam
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Exam Name</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Duration</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {exams.map((exam) => (
                    <TableRow key={exam.id}>
                      <TableCell>{exam.name}</TableCell>
                      <TableCell>{exam.date}</TableCell>
                      <TableCell>{exam.duration}</TableCell>
                      <TableCell>
                        <Tooltip title="View">
                          <IconButton color="primary" onClick={() => handleOpenModal(exam, true)}>
                            <Visibility />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Edit">
                          <IconButton color="primary" onClick={() => handleOpenModal(exam)}>
                            <Edit />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton color="secondary" onClick={() => handleDeleteExam(exam.id)}>
                            <Delete />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>

      {/* Add/Edit/View Exam Modal */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Paper
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            padding: 4,
          }}
        >
          <Typography variant="h6" gutterBottom>
            {selectedExam ? (isViewing ? 'View Exam' : 'Edit Exam') : 'Add Exam'}
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Exam Name"
            value={selectedExam?.name || ''}
            disabled={isViewing}
            // Add onChange logic to handle form data
          />
          <TextField
            fullWidth
            margin="normal"
            label="Date"
            type="date"
            value={selectedExam?.date || ''}
            disabled={isViewing}
            // Add onChange logic to handle form data
          />
          <TextField
            fullWidth
            margin="normal"
            label="Duration"
            value={selectedExam?.duration || ''}
            disabled={isViewing}
            // Add onChange logic to handle form data
          />
          {!isViewing && (
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleAddOrEditExam}
            >
              {selectedExam ? 'Save Changes' : 'Add Exam'}
            </Button>
          )}
        </Paper>
      </Modal>
    </Container>
  );
};

export default ExamManagement;

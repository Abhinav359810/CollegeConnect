// src/components/Student/SubmitQuestion.js
import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const SubmitQuestion = () => {
  const [questionText, setQuestionText] = useState('');
  const [tags, setTags] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!questionText) {
      alert('Please enter a question.');
      return;
    }
    setLoading(true);
    try {
      const questionRef = collection(db, 'questions');
      await addDoc(questionRef, {
        text: questionText,
        tags: tags.split(',').map(tag => tag.trim()), // Convert tags to an array
        timestamp: new Date(),
        answers: [] // Initialize with an empty array
      });
      setQuestionText('');
      setTags('');
      alert('Question submitted successfully!');
    } catch (error) {
      console.error('Error submitting question:', error);
      alert('Failed to submit question. Please try again.');
    }
    setLoading(false);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Submit a Question</Typography>
      <TextField
        label="Your Question"
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Tags (comma separated)"
        variant="outlined"
        fullWidth
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={loading}
      >
        Submit
      </Button>
    </Box>
  );
};

export default SubmitQuestion;

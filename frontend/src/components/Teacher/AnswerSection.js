import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const AnswerSection = ({ selectedQuestion }) => {
  const [answerText, setAnswerText] = useState('');

  const handleAnswerSubmit = async () => {
    if (!answerText.trim()) return;

    const questionRef = doc(db, 'questions', selectedQuestion.id);
    await updateDoc(questionRef, {
      answers: arrayUnion({
        answerText,
        answeredBy: 'Teacher Name', // Replace with dynamic data if available
        createdAt: new Date(),
      }),
    });

    setAnswerText('');
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5">Answer the Question</Typography>
      <TextField
        fullWidth
        multiline
        rows={4}
        value={answerText}
        onChange={(e) => setAnswerText(e.target.value)}
        placeholder="Type your answer here..."
        sx={{ mt: 2, mb: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleAnswerSubmit}>
        Submit Answer
      </Button>
    </Box>
  );
};

export default AnswerSection;

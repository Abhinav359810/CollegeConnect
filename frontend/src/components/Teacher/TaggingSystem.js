import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const TaggingSystem = ({ selectedQuestion }) => {
  const [tags, setTags] = useState('');

  const handleTagSubmit = async () => {
    if (!tags.trim()) return;

    const tagArray = tags.split(',').map(tag => tag.trim());
    const questionRef = doc(db, 'questions', selectedQuestion.id);

    await updateDoc(questionRef, {
      tags: tagArray,
    });

    setTags('');
  };

  return (
    <Box sx={{ mt: 3 }}>
      <TextField
        fullWidth
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        placeholder="Add tags (comma-separated)"
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleTagSubmit}>
        Add Tags
      </Button>
    </Box>
  );
};

export default TaggingSystem;

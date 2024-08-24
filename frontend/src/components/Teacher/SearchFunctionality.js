import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, Box } from '@mui/material';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const SearchFunctionality = ({ onSelectQuestion }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const q = query(collection(db, 'questions'), where('tags', 'array-contains', searchTerm.trim()));
    const querySnapshot = await getDocs(q);
    const results = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setSearchResults(results);
  };

  return (
    <Box sx={{ mt: 3 }}>
      <TextField
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search questions by tag"
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
      <List>
        {searchResults.map((question) => (
          <ListItem button key={question.id} onClick={() => onSelectQuestion(question)}>
            <ListItemText primary={question.questionText} secondary={question.tags.join(', ')} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SearchFunctionality;

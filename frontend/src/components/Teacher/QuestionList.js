import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const QuestionList = ({ onSelectQuestion }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    
    const fetchQuestions = async () => {
      const q = query(collection(db, 'questions'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const questionsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setQuestions(questionsList);
    };

    fetchQuestions();
  }, []);

  return (
    <div>
      <Typography variant="h5">Questions</Typography>
      <List>
        {questions.map((question) => (
          <ListItem button key={question.id} onClick={() => onSelectQuestion(question)}>
            <ListItemText primary={question.questionText} secondary={question.tags.join(', ')} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default QuestionList;

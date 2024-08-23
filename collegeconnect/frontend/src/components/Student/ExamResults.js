import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import '../../assets/CSS/Student/ExamResults.css';

function ExamResults({ studentId }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const q = query(collection(db, 'results'), where('studentId', '==', studentId));
        const querySnapshot = await getDocs(q);
        const resultList = querySnapshot.docs.map(doc => doc.data());
        setResults(resultList);
      } catch (error) {
        console.error('Error fetching results:', error);
      }
    };

    fetchResults();
  }, [studentId]);

  return (
    <div className="exam-results">
      <h2>Exam Results</h2>
      <ul>
        {results.map((result, index) => (
          <li key={index} className="result-item">
            <div className="result-details">
              <p><strong>{result.subject}</strong>: {result.grade}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExamResults;

import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import '../../assets/CSS/Student/ExamSchedule.css';

function ExamSchedule({ studentId }) {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const q = query(collection(db, 'exams'), where('studentId', '==', studentId));
        const querySnapshot = await getDocs(q);
        const examList = querySnapshot.docs.map(doc => doc.data());
        setExams(examList);
      } catch (error) {
        console.error('Error fetching exams:', error);
      }
    };

    fetchExams();
  }, [studentId]);

  return (
    <div className="exam-schedule">
      <h2>Upcoming Exams</h2>
      <ul>
        {exams.map((exam, index) => (
          <li key={index} className="exam-item">
            <div className="exam-details">
              <p><strong>{exam.subject}</strong></p>
              <p>{exam.date} at {exam.time}</p>
              <p>Location: {exam.location}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExamSchedule;

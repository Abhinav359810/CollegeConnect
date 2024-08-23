import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import '../../assets/CSS/Student/UpcomingDeadlines.css';

function UpcomingDeadlines({ studentId }) {
  const [deadlines, setDeadlines] = useState([]);

  useEffect(() => {
    const fetchDeadlines = async () => {
      try {
        const q = query(collection(db, "deadlines"), where("studentId", "==", studentId));
        const querySnapshot = await getDocs(q);
        const deadlinesList = querySnapshot.docs.map(doc => doc.data());
        setDeadlines(deadlinesList);
      } catch (error) {
        console.error("Error fetching deadlines:", error);
      }
    };

    fetchDeadlines();
  }, [studentId]);

  return (
    <div className="upcoming-deadlines">
      <h2>Upcoming Deadlines</h2>
      <div className="deadline-list">
        {deadlines.map((deadline, index) => (
          <div key={index} className="deadline-item">
            <p>{deadline.title}</p>
            <span>Due in {deadline.dueIn}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingDeadlines;

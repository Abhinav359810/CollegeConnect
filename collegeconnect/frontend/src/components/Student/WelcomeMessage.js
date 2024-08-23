import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';  // Ensure this path is correct
import '../../assets/CSS/Student/WelcomeMessage.css';

function WelcomeMessage({ studentId }) {
  const [studentName, setStudentName] = useState('');

  useEffect(() => {
    const fetchStudentName = async () => {
      try {
        const docRef = doc(db, "students", studentId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setStudentName(docSnap.data().name);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching student name:", error);
      }
    };

    fetchStudentName();
  }, [studentId]);

  return (
    <div className="welcome-message">
      <h1>Welcome back, {studentName}!</h1>
      <p>Here’s what’s happening today:</p>
    </div>
  );
}

export default WelcomeMessage;

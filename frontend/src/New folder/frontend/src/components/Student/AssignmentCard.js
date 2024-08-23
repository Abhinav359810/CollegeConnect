import React from 'react';
import '../../assets/CSS/Student/AssignmentCard.css';

function AssignmentCard() {
  return (
    <div className="assignment-card">
      <h4>Your Assignments</h4>
      <ul>
        <li>Math Homework - Due: Aug 30</li>
        <li>Science Project - Due: Sep 5</li>
      </ul>
    </div>
  );
}

export default AssignmentCard;

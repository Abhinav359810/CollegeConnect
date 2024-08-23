import React from 'react';
import ExamSchedule from '../../components/Student/ExamSchedule';
import PreparationResources from '../../components/Student/PreparationResources';
import ExamResults from '../../components/Student/ExamResults';
import '../../assets/CSS/Student/Exams.css';

function Exams({ studentId }) {
  return (
    <div className="exams-page">
      {/* <ExamSchedule studentId={studentId} />
      <PreparationResources />
      <ExamResults studentId={studentId} /> */}
    </div>
  );
}

export default Exams;

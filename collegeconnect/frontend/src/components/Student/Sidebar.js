// src/components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../assets/CSS/Student/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar d-flex flex-column p-3 bg-dark">
      <NavLink to="/student-dashboard" className="menu-item">
        Home
      </NavLink>
      <NavLink to="/student-dashboard/students" className="menu-item">
        Students
      </NavLink>
      <NavLink to="/student-dashboard/teachers" className="menu-item">
        Teachers
      </NavLink>
      <NavLink to="/student-dashboard/exam" className="menu-item">
        Exam
      </NavLink>
      <NavLink to="/student-dashboard/fees" className="menu-item">
        Fees
      </NavLink>
      <NavLink to="/student-dashboard/library" className="menu-item">
        Library
      </NavLink>
    </div>
  );
}

export default Sidebar;

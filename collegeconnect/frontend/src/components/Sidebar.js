import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaHome, FaUserGraduate, FaChalkboardTeacher, FaUserTie, FaCalendarAlt, FaBook, FaToolbox } from 'react-icons/fa';
import '../assets/CSS/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src="logo.png" alt="CampusConnect Logo" className="logo" />
      </div>
      <Nav className="flex-column">
        <Nav.Link href="/student-portal"><FaHome /> Dashboard</Nav.Link>
        <Nav.Link href="#students"><FaUserGraduate /> Students</Nav.Link>
        <Nav.Link href="#teachers"><FaChalkboardTeacher /> Teachers</Nav.Link>
        <Nav.Link href="#parents"><FaUserTie /> Parents</Nav.Link>
        <Nav.Link href="#events"><FaCalendarAlt /> Events</Nav.Link>
        <Nav.Link href="#exams"><FaBook /> Exams</Nav.Link>
        <Nav.Link href="#assistant"><FaToolbox /> Assistant</Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar;

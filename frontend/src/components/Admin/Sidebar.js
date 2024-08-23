import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaUsers, FaBook, FaChartLine, FaEnvelope, FaCog } from 'react-icons/fa';
import '../../assets/CSS/Student/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <Nav className="flex-column">
        <Nav.Link href="/dashboard" className="nav-link"><FaChartLine className="fa-icon" /> Dashboard</Nav.Link>
        <Nav.Link href="/users" className="nav-link"><FaUsers className="fa-icon" /> Users</Nav.Link>
        <Nav.Link href="/courses" className="nav-link"><FaBook className="fa-icon" /> Courses</Nav.Link>
        <Nav.Link href="/support" className="nav-link"><FaEnvelope className="fa-icon" /> Support</Nav.Link>
      </Nav>
      <Nav.Link href="/settings" className="settings-icon"><FaCog /></Nav.Link>
    </div>
  );
}

export default Sidebar;

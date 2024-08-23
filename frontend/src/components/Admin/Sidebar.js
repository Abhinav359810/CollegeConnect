import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaUsers, FaBook, FaChartLine, FaCogs, FaEnvelope } from 'react-icons/fa';
import '../../assets/CSS/Student/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <Nav className="flex-column">
        <Nav.Link href="/dashboard" className="sidebar-item"><FaChartLine /> Dashboard</Nav.Link>
        <Nav.Link href="/users" className="sidebar-item"><FaUsers /> Users</Nav.Link>
        <Nav.Link href="/courses" className="sidebar-item"><FaBook /> Courses</Nav.Link>
        <Nav.Link href="/settings" className="sidebar-item"><FaCogs /> Settings</Nav.Link>
        <Nav.Link href="/support" className="sidebar-item"><FaEnvelope /> Support</Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar;

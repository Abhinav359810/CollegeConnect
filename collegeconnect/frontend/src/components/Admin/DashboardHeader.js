import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import '../../assets/CSS/DashboardHeader.css';

function DashboardHeader() {
  return (
    <Navbar bg="light" className="dashboard-header">
      <Navbar.Brand href="/dashboard">Admin Dashboard</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#notifications"><FaBell /></Nav.Link>
        <Nav.Link href="#profile"><FaUserCircle /></Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default DashboardHeader;

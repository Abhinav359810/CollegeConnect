import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AdminSidebar from './AdminSidebar';
import StatsCard from './StatsCard';
import UserTable from './UserTable';
import { FaUsers, FaBook, FaEnvelope } from 'react-icons/fa';
import '../../assets/CSS/Admin/AdminDashboard.css';

function AdminDashboard() {
  return (
    <div className="admin-dashboard d-flex">
      <AdminSidebar />
      <Container fluid className="dashboard-content">

        {/* Dashboard Stats Cards */}
        <Row className="mt-4">
          <Col md={4}>
            <StatsCard title="Total Users" value="1,200" icon={<FaUsers />} />
          </Col>
          <Col md={4}>
            <StatsCard title="Active Courses" value="34" icon={<FaBook />} />
          </Col>
          <Col md={4}>
            <StatsCard title="Open Tickets" value="10" icon={<FaEnvelope />} />
          </Col>
        </Row>

        {/* User Table and Chart */}
        <Row className="mt-4">
          <Col md={8}>
            <UserTable />
          </Col>
          <Col md={4}>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminDashboard;

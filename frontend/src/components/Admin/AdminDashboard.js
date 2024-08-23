import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import DashboardHeader from '../components/DashboardHeader';
import StatsCard from '../components/StatsCard';
import UserTable from '../components/UserTable';
import Chart from '../components/Chart';
import { FaUsers, FaBook, FaEnvelope } from 'react-icons/fa';
import '../../assets/CSS/AdminDashboard.css';

function AdminDashboard() {
  return (
    <div className="admin-dashboard d-flex">
      <Sidebar />
      <Container fluid className="dashboard-content">
        <DashboardHeader />

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
            <Chart />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminDashboard;

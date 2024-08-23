import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CourseOverview from './CourseOverview';
import UpcomingAssignments from './UpcomingAssignments';
import Notifications from './Notifications';
import InteractiveCalendar from './InteractiveCalendar';
import ResourceLibrary from './ResourceLibrary';
import StudyGroups from './StudyGroups';
import CareerServices from './CareerServices';
import Achievements from './Achievements';
import '../assets/CSS/StudentDashboard.css';

function StudentDashboard() {
  return (
    <Container fluid className="mt-4">
      <h1>Welcome, [Student Name]</h1>
      <p>“Education is the most powerful weapon which you can use to change the world.” – Nelson Mandela</p>

      <Row className="mb-4">
        <Col md={6}>
          <UpcomingAssignments />
        </Col>
        <Col md={6}>
          <CourseOverview />
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6}>
          <InteractiveCalendar />
        </Col>
        <Col md={6}>
          <Notifications />
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6}>
          <ResourceLibrary />
        </Col>
        <Col md={6}>
          <StudyGroups />
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6}>
          <CareerServices />
        </Col>
        <Col md={6}>
          <Achievements />
        </Col>
      </Row>
    </Container>
  );
}

export default StudentDashboard;

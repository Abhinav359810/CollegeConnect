import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function TeacherDashboard() {
  return (
    <Container className="mt-4">
      <h2>Teacher Dashboard</h2>
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Course Management</Card.Title>
              <Card.Text>Manage your courses and upload materials.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Student Performance</Card.Title>
              <Card.Text>Analyze student progress and grades.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default TeacherDashboard;

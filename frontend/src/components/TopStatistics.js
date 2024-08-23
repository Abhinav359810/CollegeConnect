import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { FaSchool, FaChalkboardTeacher, FaUserGraduate, FaUserTie } from 'react-icons/fa';

function TopStatistics() {
  return (
    <Row className="top-statistics">
      <Col md={3}>
        <Card className="stat-card">
          <Card.Body>
            <FaSchool className="stat-icon" />
            <h4>Schools</h4>
            <h3>58</h3>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="stat-card">
          <Card.Body>
            <FaChalkboardTeacher className="stat-icon" />
            <h4>Teachers</h4>
            <h3>1,667</h3>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="stat-card">
          <Card.Body>
            <FaUserGraduate className="stat-icon" />
            <h4>Students</h4>
            <h3>1,730</h3>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="stat-card">
          <Card.Body>
            <FaUserTie className="stat-icon" />
            <h4>Parents</h4>
            <h3>1,807</h3>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default TopStatistics;

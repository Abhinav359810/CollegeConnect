import React from 'react';
import { Card, ListGroup, ProgressBar } from 'react-bootstrap';

function CourseOverview() {
  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>Course Overview</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>Computer Science 101</strong>
            <ProgressBar now={70} label="70%" className="mt-2" />
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Calculus I</strong>
            <ProgressBar now={50} label="50%" className="mt-2" />
          </ListGroup.Item>
          {/* Add more courses here */}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default CourseOverview;

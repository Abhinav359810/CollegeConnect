import React from 'react';
import { Card, ListGroup, Badge } from 'react-bootstrap';

function UpcomingAssignments() {
  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>Upcoming Assignments</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>Assignment 1:</strong> Introduction to Computer Science 
            <Badge bg="danger" className="float-end">Due: Sep 10, 2024</Badge>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Quiz 2:</strong> Calculus I 
            <Badge bg="warning" className="float-end">Due: Sep 15, 2024</Badge>
          </ListGroup.Item>
          {/* Add more assignments here */}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default UpcomingAssignments;

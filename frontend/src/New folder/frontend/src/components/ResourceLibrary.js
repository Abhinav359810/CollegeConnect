import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

function ResourceLibrary() {
  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>Resource Library</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>Lecture Notes: Introduction to Algorithms</ListGroup.Item>
          <ListGroup.Item>E-Book: Advanced Calculus</ListGroup.Item>
          {/* Add more resources here */}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default ResourceLibrary;

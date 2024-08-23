import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

function Notifications() {
  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>Notifications</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>New assignment posted for Computer Science 101.</ListGroup.Item>
          <ListGroup.Item>Reminder: Calculus I quiz on Sep 15.</ListGroup.Item>
          {/* Add more notifications here */}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default Notifications;

import React from 'react';
import { Card, Button } from 'react-bootstrap';

function CareerServices() {
  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>Career Services & Job Board</Card.Title>
        <p>Explore job opportunities and career advice.</p>
        <Button variant="primary">Visit Job Board</Button>
      </Card.Body>
    </Card>
  );
}

export default CareerServices;

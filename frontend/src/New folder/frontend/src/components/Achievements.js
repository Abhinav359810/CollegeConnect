import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Achievements() {
  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>Achievements & Badges</Card.Title>
        <p>View your badges and achievements.</p>
        <Button variant="info">View Achievements</Button>
      </Card.Body>
    </Card>
  );
}

export default Achievements;

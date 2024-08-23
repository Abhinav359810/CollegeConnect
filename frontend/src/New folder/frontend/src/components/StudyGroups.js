import React from 'react';
import { Card, Button } from 'react-bootstrap';

function StudyGroups() {
  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>Peer Study Groups</Card.Title>
        <p>Join a study group to collaborate with your peers.</p>
        <Button variant="success">Find a Study Group</Button>
      </Card.Body>
    </Card>
  );
}

export default StudyGroups;

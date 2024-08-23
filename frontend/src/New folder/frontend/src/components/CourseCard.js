import React from 'react';
import { Card, Button } from 'react-bootstrap';

function CourseCard({ courseTitle, courseDescription, instructorName }) {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{courseTitle}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Instructor: {instructorName}</Card.Subtitle>
        <Card.Text>
          {courseDescription}
        </Card.Text>
        <Button variant="primary">Go to Course</Button>
      </Card.Body>
    </Card>
  );
}

export default CourseCard;

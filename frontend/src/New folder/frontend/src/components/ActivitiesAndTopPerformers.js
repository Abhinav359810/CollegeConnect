import React from 'react';
import { Row, Col, Card, ListGroup, Badge } from 'react-bootstrap';

function ActivitiesAndTopPerformers() {
  return (
    <Row>
      <Col md={8}>
        <Card className="activities-card">
          <Card.Body>
            <h5>Activities & Events</h5>
            <ListGroup variant="flush">
              <ListGroup.Item>Valentine's Grams by the Senior Classes</ListGroup.Item>
              <ListGroup.Item>Spring Sports Rally</ListGroup.Item>
              <ListGroup.Item>Senior First Day Quad Takeover</ListGroup.Item>
              <ListGroup.Item>Freshman Orientation</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="top-performers-card">
          <Card.Body>
            <h5>Top Performers</h5>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <img src="student1.jpg" alt="Rovan Hossam" className="performer-img" />
                Rovan Hossam <Badge bg="success">99.88%</Badge>
              </ListGroup.Item>
              <ListGroup.Item>
                <img src="student2.jpg" alt="Rony Beyablo" className="performer-img" />
                Rony Beyablo <Badge bg="secondary">98.17%</Badge>
              </ListGroup.Item>
              <ListGroup.Item>
                <img src="student3.jpg" alt="Kenzi Mohamd" className="performer-img" />
                Kenzi Mohamd <Badge bg="warning">99.40%</Badge>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default ActivitiesAndTopPerformers;

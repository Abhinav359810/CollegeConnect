import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../assets/CSS/Homepage.css';  // Import the custom CSS

function Homepage() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRegisterClick = () => {
    navigate('/register'); // Navigate to the /register route
  };

  return (
    <div className="homepage">
      <div className="hero-section">
        <Container className="text-center">
          <h1 className="hero-title">Welcome to CampusConnect</h1>
          <p className="hero-subtitle">Connecting Students, Faculty, and Administration</p>
          <Button 
            variant="primary" 
            size="lg" 
            className="hero-button" 
            onClick={handleRegisterClick} // Set up the click handler
          >
            Register Your College
          </Button>
        </Container>
      </div>
      
      <Container className="mt-5">
        <Row>
          <Col md={8}>
            <h2 className="section-title">Latest Announcements</h2>
            <Card className="announcement-card mb-4">
              <Card.Body>
                <Card.Title>Campus Reopening</Card.Title>
                <Card.Text>
                  We are excited to announce that the campus will reopen on September 1st, 2024. 
                  Please follow the health guidelines provided by the administration.
                </Card.Text>
              </Card.Body>
            </Card>
            {/* Add more announcement cards as needed */}
          </Col>
          <Col md={4}>
            <h2 className="section-title">Quick Links</h2>
            <Card className="quick-links-card">
              <Card.Body>
                <Card.Link href="/course-catalog">Course Catalog</Card.Link><br />
                <Card.Link href="/schedules">Schedules</Card.Link><br />
                <Card.Link href="/contact">Contact Information</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Homepage;

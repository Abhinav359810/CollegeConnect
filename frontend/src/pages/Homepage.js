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
            <h2 className="section-title">Why Choose Us</h2>
            <Card className="feature-card mb-4">
              <Card.Body>
                <Card.Title>Comprehensive Resource Library</Card.Title>
                <Card.Text>
                  Access a wide range of resources including textbooks, research papers, and study materials to support your learning journey.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="feature-card mb-4">
              <Card.Body>
                <Card.Title>Seamless Communication Tools</Card.Title>
                <Card.Text>
                  Stay connected with your peers and faculty through our integrated messaging and notification systems.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="feature-card mb-4">
              <Card.Body>
                <Card.Title>Career Services</Card.Title>
                <Card.Text>
                  Get access to career counseling, job placements, and internship opportunities to jumpstart your career.
                </Card.Text>
              </Card.Body>
            </Card>
            {/* Add more feature cards as needed */}
          </Col>
          <Col md={4}>
            <h2 className="section-title">Quick Links</h2>
            <Card className="quick-links-card">
              <Card.Body>
                <Card.Link href="/course-catalog">Course Catalog</Card.Link><br />
                <Card.Link href="/admissions">Admissions</Card.Link><br />
                <Card.Link href="/student-portal">Student Portal</Card.Link><br />
                <Card.Link href="/faculty-portal">Faculty Portal</Card.Link><br />
                <Card.Link href="/contact">Contact Us</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Homepage;

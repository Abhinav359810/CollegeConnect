import React from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';

function About() {
  // Define style objects
  const aboutCardStyle = {
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    transition: 'background-color 0.3s ease',
    padding: '20px',
    height: '100%',  // Ensure both cards have the same height
  };

  const aboutCardHoverStyle = {
    backgroundColor: '#e9ecef',
  };

  const cardTextStyle = {
    fontSize: '0.9rem', // Slightly smaller font size
  };

  const accordionButtonStyle = {
    backgroundColor: '#fff',
    color: '#000',
    border: 'none',
    boxShadow: 'none',
  };

  const accordionButtonHoverStyle = {
    backgroundColor: '#e9ecef',
  };

  const accordionBodyStyle = {
    backgroundColor: '#f8f9fa',
    borderRadius: '5px',
    padding: '20px',
  };

  return (
    <Container className="mt-5">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center">About CampusConnect</h1>
          <p className="lead text-center">
            CampusConnect is a comprehensive platform designed to connect students, faculty, and the administration in a seamless digital environment. Our mission is to foster better communication, resource sharing, and overall academic experience.
          </p>
        </Col>
      </Row>
      
      <Row className="mb-5">
        <Col md={6}>
          <Card 
            className="shadow-sm" 
            style={aboutCardStyle} 
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = aboutCardHoverStyle.backgroundColor}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = aboutCardStyle.backgroundColor}
          >
            <Card.Body>
              <Card.Title>Who We Are</Card.Title>
              <Card.Text style={cardTextStyle}>
                We are a team of dedicated professionals committed to improving the academic experience through technology. Our platform is built with the latest tools and a user-centric approach, ensuring that everyone on campus can easily access the resources they need.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card 
            className="shadow-sm" 
            style={aboutCardStyle} 
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = aboutCardHoverStyle.backgroundColor}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = aboutCardStyle.backgroundColor}
          >
            <Card.Body>
              <Card.Title>Our Vision</Card.Title>
              <Card.Text style={cardTextStyle}>
                Our vision is to create a unified digital campus where communication, collaboration, and learning are all interconnected. We believe in the power of technology to transform education and empower both students and educators.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <Accordion className="faq-accordion">
            <Accordion.Item eventKey="0">
              <Accordion.Header style={accordionButtonStyle}>What is CampusConnect?</Accordion.Header>
              <Accordion.Body style={accordionBodyStyle}>
                CampusConnect is an online platform that centralizes all campus-related activities, including communication, resource sharing, and academic management, to provide a streamlined experience for students, faculty, and administrators.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header style={accordionButtonStyle}>How do I access my courses?</Accordion.Header>
              <Accordion.Body style={accordionBodyStyle}>
                Once logged in, you can access your courses through the Student Portal. Your dashboard will display all current courses, along with assignments, grades, and other relevant information.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header style={accordionButtonStyle}>Can faculty manage their classes on CampusConnect?</Accordion.Header>
              <Accordion.Body style={accordionBodyStyle}>
                Yes! Faculty can upload course materials, create assignments, manage grades, and communicate with students through the Teacher Portal. It's designed to be intuitive and easy to use.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header style={accordionButtonStyle}>Is CampusConnect secure?</Accordion.Header>
              <Accordion.Body style={accordionBodyStyle}>
                Absolutely. We use industry-standard security measures to protect your data, including SSL encryption and secure login systems.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>

      <footer className="text-center py-4">
        <p className="mb-0">
          Made with <FaHeart color="red" /> by the CampusConnect Team
        </p>
        <small>&copy; 2024 CampusConnect. All rights reserved.</small>
      </footer>
    </Container>
  );
}

export default About;

// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import '../assets/CSS/Footer.css';  

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={6}>
            <p>&copy; 2024 CampusConnect. All Rights Reserved.</p>
          </Col>
          <Col md={6} className="text-md-right">
            <a href="#" className="text-white mx-2"><FaFacebookF /></a>
            <a href="#" className="text-white mx-2"><FaTwitter /></a>
            <a href="#" className="text-white mx-2"><FaLinkedinIn /></a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="logo.png" // Add your logo image file path here
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="CampusConnect logo"
          />
          {' '}
          CampusConnect
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>

          </Nav>
          <Nav>
            <Button variant="outline-light" href="/login" className="me-3">Login</Button>
            <Button variant="outline-success" href="/register">Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;

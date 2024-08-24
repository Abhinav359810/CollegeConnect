import React, { useState } from 'react';
import { Container, Form, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from '../firebaseConfig'; // Import db from firebaseConfig
import { collection, addDoc } from 'firebase/firestore'; // Import Firestore functions

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, 'Feedback'), {
        name,
        email,
        message,
        timestamp: new Date(),
      });
      setPopupMessage('Thank you for your feedback!');
    } catch (error) {
      console.error('Error adding document: ', error);
      setPopupMessage('An error occurred while submitting your feedback.');
    } finally {
      setIsSubmitting(false);
      setShowPopup(true);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  const handleClosePopup = () => setShowPopup(false);

  return (
    <div style={{
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Container style={{
        width: '400px',
        padding: '20px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <h1 style={{
          textAlign: 'center',
          color: '#007bff',
          marginBottom: '20px',
        }}>Contact Us</h1>
        <Form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mt-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formMessage" className="mt-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </Form.Group>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
          }}>
            <Button
              variant="primary"
              type="submit"
              disabled={isSubmitting}
              style={{
                transition: 'background-color 0.3s ease, transform 0.3s ease',
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#0056b3'; // Darker shade of blue
                e.target.style.transform = 'scale(1.05)'; // Slightly enlarge the button
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#007bff'; // Original color
                e.target.style.transform = 'scale(1)'; // Reset size
              }}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </div>
        </Form>

        {/* Popup Modal */}
        <Modal show={showPopup} onHide={handleClosePopup}>
          <Modal.Header closeButton>
            <Modal.Title>Feedback</Modal.Title>
          </Modal.Header>
          <Modal.Body>{popupMessage}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClosePopup}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}

export default Contact;

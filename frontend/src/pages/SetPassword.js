import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { db } from '../firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';

function SetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state;  // Get the email from the previous page
  const collegeId = location.pathname.split('/')[2];  // Extract the college ID from the URL

  const handleSetPassword = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    try {
      // Update the college document with the password
      const collegeRef = doc(db, 'colleges', collegeId);
      await updateDoc(collegeRef, {
        password,  // You should hash this password before storing it
      });

      // Redirect to login or dashboard after setting the password
      navigate('/login');
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-lg">
            <Card.Body>
              <h3 className="text-center mb-4">Set Your Password</h3>
              {message && <p className="text-center text-danger">{message}</p>}
              <Form onSubmit={handleSetPassword}>
                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formConfirmPassword" className="mb-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="success" type="submit" block className="rounded-pill">
                  Set Password
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SetPassword;

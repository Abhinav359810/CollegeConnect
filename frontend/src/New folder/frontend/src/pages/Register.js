import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { db } from '../firebaseConfig';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

function Register() {
  const [collegeName, setCollegeName] = useState('');
  const [adminName, setAdminName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Query the Firestore to check if the college name already exists
      const q = query(collection(db, 'colleges'), where('collegeName', '==', collegeName));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setMessage('College already registered.');
        return;
      }

      // If college name does not exist, proceed to add the new college document
      const collegeDocRef = await addDoc(collection(db, 'colleges'), {
        collegeName,
        adminName,
        email,
        mobileNumber,
        address,
      });

      // Add the admin to the faculty collection associated with the college
      await addDoc(collection(db, 'colleges', collegeDocRef.id, 'faculty'), {
        name: adminName,
        email,
        role: 'admin',  // Assign the admin role to this user
      });

      // Pass the document ID to the next page
      navigate(`/set-password/${collegeDocRef.id}`, { state: { email } });
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-lg">
            <Card.Body>
              <h3 className="text-center mb-4">Register Your College</h3>
              {message && <p className="text-center text-info">{message}</p>}
              <Form onSubmit={handleRegister}>
                <Form.Group controlId="formCollegeName" className="mb-3">
                  <Form.Label>College Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter college name"
                    value={collegeName}
                    onChange={(e) => setCollegeName(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formAdminName" className="mb-3">
                  <Form.Label>Admin Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={adminName}
                    onChange={(e) => setAdminName(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formMobileNumber" className="mb-3">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter mobile number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formAddress" className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="success" type="submit" block className="rounded-pill">
                  Next
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;

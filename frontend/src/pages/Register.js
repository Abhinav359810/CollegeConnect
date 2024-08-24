import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { db } from '../firebaseConfig';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import illustration from '../assets/img/illustration.jpg'; // Add your illustration image here

function Register() {
  const [collegeName, setCollegeName] = useState('');
  const [adminName, setAdminName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const q = query(collection(db, 'colleges'), where('collegeName', '==', collegeName));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setMessage('College already registered.');
        return;
      }

      const collegeDocRef = await addDoc(collection(db, 'colleges'), {
        collegeName,
        adminName,
        email,
        mobileNumber,
        address,
      });

      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, { displayName: adminName });

      await addDoc(collection(db, 'colleges', collegeDocRef.id, 'faculty'), {
        name: adminName,
        email,
        role: 'admin',
      });

      navigate(`/set-password/${collegeDocRef.id}`, { state: { email } });
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <Container style={{ marginTop: '5%', minHeight: '100vh' }}>
      <Row style={{ display: 'flex', alignItems: 'center' }}>
        {/* Left Section with Form */}
        <Col md={6} style={{ padding: '20px' }}>
          <Card className="shadow-lg" style={{ borderRadius: '15px' }}>
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

                <Button
                  variant="success"
                  type="submit"
                  block
                  style={{
                    width: '100%',
                    borderRadius: '30px',
                    padding: '10px',
                    fontSize: '18px',
                    backgroundColor: '#28a745',
                    border: 'none',
                    transition: 'background-color 0.3s ease',
                  }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = '#218838')}
                  onMouseOut={(e) => (e.target.style.backgroundColor = '#28a745')}
                >
                  Register
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Right Section with Illustration */}
        <Col md={6} style={{ textAlign: 'center' }}>
          <img
            src={illustration}
            alt="Illustration"
            style={{ width: '80%', height: 'auto', margin: '0 auto' }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Register;

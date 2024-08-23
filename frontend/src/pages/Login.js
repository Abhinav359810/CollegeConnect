import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { db } from '../firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { loginUser } from '../services/api';
import '../assets/CSS/Login.css';  // Custom CSS file for styling

function Login() {
  const [colleges, setColleges] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchColleges = async () => {
      const collegeSnapshot = await getDocs(collection(db, 'colleges'));
      const collegeList = collegeSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setColleges(collegeList);
    };
    fetchColleges();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!selectedCollege) {
      setMessage('Please select a college.');
      return;
    }

    try {
      // Authenticate the user (this could include checking password validity, etc.)
      const response = await loginUser({ email, password });

      // Query the database to find the user's role in the selected college's faculty collection
      const facultyQuery = query(
        collection(db, 'colleges', selectedCollege, 'faculty'),
        where('email', '==', email)
      );
      const facultySnapshot = await getDocs(facultyQuery);

      if (!facultySnapshot.empty) {
        const userDoc = facultySnapshot.docs[0];
        const userData = userDoc.data();
        const facultyRole = userData.role;

        // Store user role and other necessary details in localStorage or context API
        localStorage.setItem('userRole', facultyRole);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('selectedCollege', selectedCollege);

        // Redirect based on the faculty role
        if (facultyRole === 'teacher') {
          navigate('/teacher-dashboard');
        } else if (facultyRole === 'admin') {
          navigate('/admin-dashboard');
        } else {
          setMessage('Invalid role. Please contact support.');
        }
      } else {
        setMessage('Invalid credentials or role not found in the selected college.');
      }
    } catch (error) {
      setMessage('Invalid credentials. Please try again.');
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-lg login-card">
            <Card.Body>
              <h3 className="text-center mb-4">Login</h3>
              {message && <p className="text-center text-danger">{message}</p>}
              <Form onSubmit={handleLogin}>
                <Form.Group controlId="formCollegeSelect" className="mb-3">
                  <Form.Label>Select College</Form.Label>
                  <Form.Control
                    as="select"
                    value={selectedCollege}
                    onChange={(e) => setSelectedCollege(e.target.value)}
                    required
                  >
                    <option value="">Select your college</option>
                    {colleges.map((college) => (
                      <option key={college.id} value={college.id}>
                        {college.collegeName}
                      </option>
                    ))}
                  </Form.Control>
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

                <Form.Group controlId="formBasicPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" block className="rounded-pill">
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;

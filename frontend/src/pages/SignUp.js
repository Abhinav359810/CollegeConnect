import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { db } from '../firebaseConfig';
import { collection, getDocs, setDoc, doc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import '../assets/CSS/SignUp.css';  // Custom CSS file for styling

function SignUp() {
  const [colleges, setColleges] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('student'); // Default role is student
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const collegeSnapshot = await getDocs(collection(db, 'colleges'));
        const collegeList = collegeSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setColleges(collegeList);
      } catch (error) {
        console.error('Error fetching colleges:', error);
        setMessage('Error fetching colleges.');
      }
    };
    fetchColleges();
  }, []);

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    if (!selectedCollege) {
      setMessage('Please select a college.');
      return;
    }

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Logging user information to debug
      console.log('User created:', user);

      // Reference to the specific college document in the Pending collection
      const collegeDocRef = doc(db, 'Pending', selectedCollege);

      // Reference to the subcollection within the college document
      const roleCollectionRef = collection(collegeDocRef, role);

      // Add the user's details to the subcollection (student or teacher)
      await setDoc(doc(roleCollectionRef), {
        uid: user.uid,
        name: name,
        email: email,
        mobile: mobile,
        collegeId: selectedCollege,
        role: role,
        status: 'pending', // Set status as 'pending' until admin approves
        createdAt: new Date(),
      });

      setMessage('Sign-up successful! Redirecting...');
      navigate('/student-dashboard'); // Redirect to student dashboard after successful sign-up
    } catch (error) {
      console.error('Error during sign-up:', error);
      setMessage(`Error during sign-up: ${error.message}`);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-lg sign-up-card">
            <Card.Body>
              <h3 className="text-center mb-4">Sign Up</h3>
              {message && <p className="text-center text-danger">{message}</p>}
              <Form onSubmit={handleSignUp}>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formMobile" className="mb-3">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your mobile number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                  />
                </Form.Group>

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

                <Form.Group controlId="formRoleSelect" className="mb-3">
                  <Form.Label>Select Role</Form.Label>
                  <Form.Control
                    as="select"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                  >
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                  </Form.Control>
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

                <Form.Group controlId="formConfirmPassword" className="mb-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" block className="rounded-pill">
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;

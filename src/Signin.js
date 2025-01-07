import React, { useState } from 'react';
import { Container, Form, Button, Alert, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './authcontent';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    const sampleUser = {
      email: 'user@example.com',
      password: 'password123',
    };

    if (email === sampleUser.email && password === sampleUser.password) {
      login(); // Set the user as authenticated
      setMessage({ type: 'success', text: 'Welcome back!' });
      navigate('/register'); // Redirect to the Register page after login
    } else {
      setMessage({ type: 'error', text: 'Invalid email or password.' });
    }
  };

  // If already authenticated, redirect to register page
  if (isAuthenticated) {
    navigate('/register'); 
    return null;  // Prevent rendering the SignIn form
  }

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="mb-4 text-center">Sign In</h2>
          <Form onSubmit={handleSignIn}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Sign In
            </Button>
          </Form>

          {message && (
            <Alert
              variant={message.type === 'success' ? 'success' : 'danger'}
              className="mt-4"
            >
              {message.text}
            </Alert>
          )}

          <div className="mt-3 text-center">
            <Link to="/forgotpassword" className="d-block mb-2">
              Forgot Password?
            </Link>
            <Link to="/registerUser" className="d-block">
              New User? Register Here
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignInPage;

import React, { useState } from 'react';
import { Container, Form, Button, Alert, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null); // For success or error messages

  const handleForgotPassword = (e) => {
    e.preventDefault();

    // Simulated API call for sending reset email
    const validEmail = 'user@example.com'; // Replace with actual backend validation

    if (email === validEmail) {
      setMessage({
        type: 'success',
        text: 'Password reset link sent! Check your email.',
      });
    } else {
      setMessage({
        type: 'error',
        text: 'Email address not found. Please try again.',
      });
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="mb-4 text-center">Forgot Password</h2>
          <p className="text-center mb-4">
            Enter your email address to receive a password reset link.
          </p>
          <Form onSubmit={handleForgotPassword}>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Send Reset Link
            </Button>
          </Form>

          {/* Feedback Message */}
          {message && (
            <Alert
              variant={message.type === 'success' ? 'success' : 'danger'}
              className="mt-4"
            >
              {message.text}
            </Alert>
          )}

          <div className="mt-3 text-center">
            <Link to="/signin">Back to Sign In</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPasswordPage;

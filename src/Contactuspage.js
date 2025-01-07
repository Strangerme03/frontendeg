import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setError(true);
      return;
    }

    // Simulated submission (Replace with API call in a real app)
    console.log('Contact Form Submitted:', formData);

    setShowAlert(true);
    setError(false);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Contact Us</h2>

      {showAlert && (
        <Alert variant="success" className="text-center">
          Your message has been sent successfully!
        </Alert>
      )}

      {error && (
        <Alert variant="danger" className="text-center">
          Please fill in all fields before submitting.
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Enter your message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" type="submit">
            Send Message
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default ContactUsPage;

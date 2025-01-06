import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';


const RegisterPage = () => {
  const [formData, setFormData] = useState({
    babyName: '',
    dateOfBirth: '',
    fatherName: '',
    motherName: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Birth registration submitted successfully!');
  };

  return (
  <>
    <Container className="mt-5">
      <h2 className="text-center mb-4">Birth Registration Form</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="babyName">
              <Form.Label>Baby's Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter baby's name"
                name="babyName"
                value={formData.babyName}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="dateOfBirth">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="fatherName">
              <Form.Label>Father's Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter father's name"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="motherName">
              <Form.Label>Mother's Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter mother's name"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <div className="text-center">
          <Button variant="primary" type="submit">
            Submit Registration
          </Button>
        </div>
      </Form>
    </Container>
    </>
  );
};

export default RegisterPage;

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const TrackStatusPage = () => {
  const [applicationId, setApplicationId] = useState('');
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulated status check (Replace with API call in a real app)
    const sampleData = {
      '12345': 'Processing',
      '67890': 'Approved',
      '11223': 'Rejected',
    };

    if (sampleData[applicationId]) {
      setStatus(sampleData[applicationId]);
      setError(false);
    } else {
      setStatus(null);
      setError(true);
    }
  };

  return (
    <Container className="py-5">
      <Row>
        <Col>
          <h2>Track Your Birth Registration Status</h2>
          <p>Enter your details below to track the status of your birth registration.</p>
          
          {/* Track Status Form */}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Registration ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your registration ID"
                value={applicationId}
                onChange={(e) => setApplicationId(e.target.value)}
              />
            </Form.Group>
            
            <Button variant="primary" type="submit">Track Status</Button>
          </Form>

          {/* Displaying status or error message */}
          {status && !error && (
            <Alert variant="success" className="mt-4">
              Status: {status}
            </Alert>
          )}
          {error && (
            <Alert variant="danger" className="mt-4">
              No record found for the provided Registration ID.
            </Alert>
          )}
        </Col>
      </Row>

      {/* Extra section to make page visually longer */}
      <div style={{ height: '200px', backgroundColor: 'white' }}></div>
    </Container>
  );
};

export default TrackStatusPage;

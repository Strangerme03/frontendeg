import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container className="mt-5">
      <Row className="text-center mb-4">
        <Col>
          <h1>Welcome to the Online Birth Registration Platform</h1>
          <p>Register a birth easily and quickly from the comfort of your home.</p>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Register a Birth</Card.Title>
              <Card.Text>
                Birth registration process for a new baby.
              </Card.Text>
              <Button variant="primary" href="/register">Start Registration</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Track Status</Card.Title>
              <Card.Text>
                Check the status of your birth registration.
              </Card.Text>
              <Button variant="primary" href="/status">Track Status</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Contact Us</Card.Title>
              <Card.Text>
                Get in touch for any support or inquiries.
              </Card.Text>
              <Button variant="primary" href="/contact">Contact</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              We are committed to providing a seamless and secure birth registration platform for everyone.
            </p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/register" className="text-white">Register a Birth</a></li>
              <li><a href="/status" className="text-white">Track Status</a></li>
              <li><a href="/contact" className="text-white">Contact Us</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Information</h5>
            <p>Email: support@birthregistry.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Birth Registry Lane, Sindhuli, Nepal</p>
          </Col>
        </Row>
        <hr className="bg-white" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Online Birth Registration Platform. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
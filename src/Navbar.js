import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import {  useNavigate } from 'react-router-dom';
import { useAuth } from './authcontent'; // Import the useAuth hook

const NavigationBar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Call the logout function from the context
    navigate('/signin'); // Redirect to sign-in page after logout
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Birth Registration System</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="/register">Register Birth</Nav.Link>
        <Nav.Link href="/status">Track Status</Nav.Link>
        <Nav.Link href="/contact">Contact us</Nav.Link>

        {isAuthenticated ? (
          <Button variant="outline-light" onClick={handleLogout}>
            Log Out
          </Button>
        ) : (
          <Nav.Link href="/signin">Sign In</Nav.Link>
        )}
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './authcontent';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />; // Redirect to SignIn if not authenticated
  }

  return children; // Render the protected component if authenticated
};

export default ProtectedRoute;

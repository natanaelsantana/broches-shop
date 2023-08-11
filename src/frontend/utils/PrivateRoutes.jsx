import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const PrivateRoute = ({ element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3001/api/auth/authentication',
          {
            withCredentials: true,
          },
        );

        if (response.status === 200) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        setIsAuthenticated(false);
        console.log(error);
      } finally {
        // Set loading to false once the authentication check is completed
        setIsLoading(false);
      }
    };

    checkAuthentication();
  }, []);

  // If the authentication check is still loading, you can render a loading indicator here
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Once the authentication check is completed, render the element if authenticated, or redirect to the "/login" page
  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;

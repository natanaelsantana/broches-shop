// PrivateRoute.js
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoute = ({ element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verificar o cookie de autenticação
    const cookie = Cookies.get('jwt');
    const isAuthenticated = !!cookie;

    if (isAuthenticated) {
      console.log(cookie);
      setIsAuthenticated(true);
    } else {
      console.log(cookie);

      return () => {
        <Navigate to="/login" />;
      };
    }
  }, []);

  if (isAuthenticated) {
    return element;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;

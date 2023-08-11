import { useState, useEffect } from 'react';
import axios from 'axios';

const IsAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
      }
    };

    checkAuthentication();
  }, []);

  return isAuthenticated;
};

export default IsAuth;

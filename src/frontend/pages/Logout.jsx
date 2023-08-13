import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';

function Logout() {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function performLogout() {
      try {
        const response = await axios.post(
          'http://localhost:3001/api/auth/logout',
          {},
          {
            headers: {
              'Content-Type': 'application/json',
            },
            withCredentials: true,
          },
        );
        setMessage(response.data.message || 'Logout successful'); // Assuming the response contains a 'message' field
      } catch (error) {
        setMessage('Logout failed');
      } finally {
        setIsLoading(false);
      }
    }

    performLogout();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <h1>Come back soon</h1>
      <p>{message}</p>
      <a href="/">Go to home page</a>
    </div>
  );
}

export default Logout;

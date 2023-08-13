import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import OneLoad from '../components/OneProductLoad';
import { Link } from 'react-router-dom';

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
        setMessage(response.data.message || 'Logout successful');
      } catch (error) {
        setMessage('Logout failed');
      } finally {
        setIsLoading(false);
      }
    }

    performLogout();
  }, []);

  if (isLoading) {
    return (
      <div>
        <OneLoad />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="font-mono text-6xl text-center">Come back soon!</h1>
        <p className="text-xl text-center">{message}</p>
        <div className="mt-4 text-center absolute bottom-0 left-0 p-4">
          <Link
            to="/"
            className="bg-purple-500 text-white hover:bg-black hover:text-white py-2 px-4 rounded-md flex items-center transition duration-200"
          >
            <span className="mr-3">&#8592;</span>Go to home page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Logout;

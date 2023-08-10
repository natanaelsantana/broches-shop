import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Logout = () => {
  return (
    <div>
      <h1>Come back soon</h1>
      <Link to="/">Go to home page</Link>
    </div>
  );
};

export default Logout;

// src/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { Appbar } from '../component/AppBar'
import { Users } from '../component/User'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Dashboard = () => {
  const [authToken, setAuthToken] = useState('');
  useEffect(() => {
    // Assume you retrieve the AuthToken from storage after user login
    const storedToken = localStorage.getItem('authToken');
    setAuthToken(storedToken);
    axios.defaults.headers['Authorization'] = 'Bearer ' + storedToken;
  }, []);

  const navigate = useNavigate();

  if(!authToken || authToken === undefined){
    navigate('/signin');
  }

  return (
    <div className="container mx-auto p-4">
      <Appbar />
      <div>
        <Users />
      </div>
    </div>
  );
};
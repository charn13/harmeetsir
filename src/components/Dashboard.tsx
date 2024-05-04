'use client'
import React from 'react'

import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user details when component mounts
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:1700/login/sucess'); // Assuming you have an endpoint to fetch user details
        setUser(response.data);
      } catch (error) {
        console.error('Failed to fetch user:', error);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/logout'); // Endpoint to trigger logout
      console.log(response.data); // Log response if needed
      // Redirect or handle UI updates after logout
    } catch (error) {
      console.error('Logout failed:', error);
      // Handle error cases
    }
    console.log(handleLogout,"check button");
    
  };

  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      {user && (
        <div>
          <h2>User Details:</h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Image: <img src={user.image} alt="User" /></p>
        </div>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;

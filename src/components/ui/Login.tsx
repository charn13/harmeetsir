// components/Login.js
'use client'
import React, { useState } from 'react';
import { Gbbutton } from '../Gbbutton';
import Fbbutn from '../Fbbutn';
import ResetPasswordForm from './ResetPasswordform';

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [loginSuccess, setLoginSuccess] = useState(false); // State variable for login success

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:1700/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "email": credentials.email,
          "password": credentials.password
        })
      });

      const data = await response.json();
      console.log(data, "check the data");

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Save user details to local storage
      localStorage.setItem('user', JSON.stringify(data));

      console.log('Login successful:', data);
      setLoginSuccess(true); // Set login success state to true
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please try again.'); // Display error message
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6" style={{ color: "blue", textAlign: "center" }}>Login</h1>
        {!loginSuccess ? (
          <form onSubmit={handleSubmit} style={{ color: "#2e1065" }}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={credentials.email}
              onChange={handleChange}
              className="w-full p-3 mb-4 rounded-md border border-gray-300"
              required
              style={{ color: "#2e1065" }}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
              className="w-full p-3 mb-4 rounded-md border border-gray-300"
              required
              style={{ color: "#2e1065" }}
            />
            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Login
            </button>

            <div className='m-auto pt-5'>
              <div><a href="/forgetpass">RESET YOUR PASSWORD</a></div>
              <Gbbutton />
            </div>
            <div className='m-auto pt-5'>
              <Fbbutn />
            </div>
          </form>
        ) : (
          <div className="text-green-500 text-center">Login successful!</div>
        )}
      </div>
    </div>
  );
}

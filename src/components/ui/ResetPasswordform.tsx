// const response = await axios.post('http://localhost:1700/reset-password', { Remail });
// Import useState
"use client"
import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';

const ResetPasswordForm = () => {
  const [Remail, setRemail] = useState('');

  const handleRemailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRemail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("chek fetxh data");
    
    try {
      const response = await axios.post('http://localhost:1700/reset-password', { email: Remail });
      console.log(response.data);
      // Handle success, maybe show a message to the user
    } catch (error) {
      console.error(error); // Log the error
      // Handle the error
      // Handle error, maybe show an error message to the user
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Remail: </label>
          <input type="email" value={Remail} name="resetpass" onChange={handleRemailChange} required  style={{ "color": "green" }}/>
        </div>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPasswordForm;

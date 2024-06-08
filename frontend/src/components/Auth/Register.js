// src/components/Auth/Register.js
import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const { username, email, password } = formData;

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    // Add registration logic here
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={username} onChange={handleChange} placeholder="Username" required />
        <input type="email" name="email" value={email} onChange={handleChange} placeholder="Email" required />
        <input type="password" name="password" value={password} onChange={handleChange} placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

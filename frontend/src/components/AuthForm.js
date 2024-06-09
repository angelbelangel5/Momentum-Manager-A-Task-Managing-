import React, { useState } from 'react';

const AuthForm = ({ onSubmit, formType }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    if (formType === 'register') {
      userData.username = username;
    }
    onSubmit(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {formType === 'register' && (
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      )}
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">{formType === 'login' ? 'Login' : 'Register'}</button>
    </form>
  );
};

export default AuthForm;

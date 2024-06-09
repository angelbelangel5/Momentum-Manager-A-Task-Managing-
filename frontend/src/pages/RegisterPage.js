import React from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../api/auth';
import AuthForm from '../components/AuthForm';

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegister = async (userData) => {
    try {
      await register(userData);
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return <AuthForm onSubmit={handleRegister} formType="register" />;
};

export default RegisterPage;

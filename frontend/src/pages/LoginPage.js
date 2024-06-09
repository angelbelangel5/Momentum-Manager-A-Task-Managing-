import React from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth';
import AuthForm from '../components/AuthForm';
import { useAuth } from '../common/useAuth';

const LoginPage = () => {
  const navigate = useNavigate();
  const { setAuthData } = useAuth();

  const handleLogin = async (userData) => {
    try {
      const { data } = await login(userData);
      setAuthData(data.token);
      navigate('/tasks');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return <AuthForm onSubmit={handleLogin} formType="login" />;
};

export default LoginPage;

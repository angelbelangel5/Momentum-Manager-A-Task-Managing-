import axios from 'axios';
import { API_URL } from '../common/constants';

export const login = async (userData) => {
    return await axios.post(`${API_URL}/api/auth/login`, userData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };
  
export const register = async (userData) => {
  return await axios.post(`${API_URL}/api/auth/register`, userData);
};

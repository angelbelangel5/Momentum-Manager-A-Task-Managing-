import axios from 'axios';
const API_URL = '/api/tasks';

export const createTask = async (taskData, token) => {
  return axios.post(API_URL, taskData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getTasks = async (token) => {
  return axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getTaskById = async (taskId, token) => {
  return axios.get(`${API_URL}/${taskId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const updateTask = async (taskId, taskData, token) => {
  return axios.put(`${API_URL}/${taskId}`, taskData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deleteTask = async (taskId, token) => {
  return axios.delete(`${API_URL}/${taskId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

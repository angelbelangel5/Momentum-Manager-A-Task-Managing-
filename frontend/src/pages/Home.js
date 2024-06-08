// src/pages/Home.js
import React from 'react';
import TaskList from '../components/Task/TaskList';

const Home = () => {
  return (
    <div>
      <h1>Task Management App</h1>
      <TaskList />
    </div>
  );
};

export default Home;

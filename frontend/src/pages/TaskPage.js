import React, { useEffect, useState } from 'react';
import { useAuth } from '../common/useAuth';
import { createTask, getTasks, deleteTask } from '../api/tasks';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const TaskPage = () => {
  const { token } = useAuth();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await getTasks(token);
      setTasks(data);
    };
    fetchTasks();
  }, [token]);

  const handleCreateTask = async (taskData) => {
    const { data } = await createTask(taskData, token);
    setTasks([...tasks, data]);
  };

  const handleDeleteTask = async (taskId) => {
    await deleteTask(taskId, token);
    setTasks(tasks.filter((task) => task._id !== taskId));
  };

  return (
    <div>
      <h1>Tasks</h1>
      <TaskForm onSubmit={handleCreateTask} />
      <TaskList tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
};

export default TaskPage;

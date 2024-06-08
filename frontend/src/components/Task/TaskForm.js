import React, { useState } from 'react';

const TaskForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'todo'
  });

  const { title, description, status } = formData;

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();

  };

  return (
    <div>
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={title} onChange={handleChange} placeholder="Title" required />
        <textarea name="description" value={description} onChange={handleChange} placeholder="Description"></textarea>
        <select name="status" value={status} onChange={handleChange}>
          <option value="todo">Todo</option>
          <option value="in_progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};

export default TaskForm;

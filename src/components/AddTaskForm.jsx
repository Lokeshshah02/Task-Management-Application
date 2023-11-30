import React, { useState, useContext } from 'react';
import { TaskContext } from './TaskContext';
import { useHistory } from 'react-router-dom';

const AddTaskForm = () => {
  const { addTask } = useContext(TaskContext);
  const history = useHistory();
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [priority, setPriority] = useState('low'); // Default priority

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() === '') return;

    addTask({
      name: taskName,
      description: taskDescription,
      priority: priority,
      completed: false,
    });

    setTaskName('');
    setTaskDescription('');
    setPriority('low'); // Reset priority to default
    history.push('/');
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <h2>Add Task</h2>
      <label>
        Task Name:
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </label>
      <label>
        Task Description:
        <textarea
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
      </label>
      <label>
        Priority Level:
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;

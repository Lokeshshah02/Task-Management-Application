// EditTaskForm.js
import React, { useState, useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { TaskContext } from './TaskContext';

const EditTaskForm = () => {
  const { tasks, editTask } = useContext(TaskContext);
  const history = useHistory();
  const { taskId } = useParams();
  const [taskData, setTaskData] = useState({
    name: '',
    description: '',
    priority: 'low', // Default priority
    completed: false,
  });

  useEffect(() => {
    const task = tasks.find((task) => task.id === parseInt(taskId));
    if (task) {
      setTaskData({
        name: task.name,
        description: task.description || '',
        priority: task.priority || 'low',
        completed: task.completed,
      });
    }
  }, [tasks, taskId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTaskData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskData.name.trim() === '') return;

    editTask(parseInt(taskId), {
      name: taskData.name,
      description: taskData.description,
      priority: taskData.priority,
      completed: taskData.completed,
    });

    history.push('/');
  };

  return (
    <form className="edit-task-form" onSubmit={handleSubmit}>
      <h2>Edit Task</h2>
      <label>
        Task Name:
        <textarea
          name="name"
          value={taskData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Task Description:
        <textarea
          name="description"
          value={taskData.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Priority:
        <select
          name="priority"
          value={taskData.priority}
          onChange={handleChange}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
      <label>
        Completed:
        <input
          type="checkbox"
          name="completed"
          checked={taskData.completed}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditTaskForm;

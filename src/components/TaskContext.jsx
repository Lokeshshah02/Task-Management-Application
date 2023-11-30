// TaskContext.js
import React, { createContext, useState, useEffect } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = task => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const toggleTask = taskId => {
    setTasks(tasks.map(task => (task.id === taskId ? { ...task, completed: !task.completed } : task)));
  };

  const deleteTask = taskId => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const editTask = (taskId, updatedTask) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) =>
        task.id === taskId ? { ...task, ...updatedTask } : task
      );
    });
  };

  const sortTasks = () => {
    setTasks([...tasks].sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1)));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask, editTask, sortTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

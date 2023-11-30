// TaskList.js
import React, { useContext } from 'react';
import TaskItem from './TaskItem';
import { TaskContext } from './TaskContext';

const TaskList = () => {
  const { tasks, toggleTask, deleteTask, sortTasks } = useContext(TaskContext);

  return (
    <div className='tasklist'>
      <h2>Task List</h2>
      <button onClick={sortTasks}>Sort by Completion</button>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;

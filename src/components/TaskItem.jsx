// TaskItem.js
import React from 'react';

const TaskItem = ({ task, onToggle, onDelete, onWeekCompleteToggle }) => {
  const { id, name, description, priority, completed, completedForWeek } = task;

  return (
    <div className={`task-item ${completed ? 'completed' : ''}`}>
     Checklist for Completion
      <input type="checkbox" className="custom-checkbox" checked={completed} onChange={() => onToggle(id)} />
      
      <div>
        <h3>{name}</h3>
        <p>ID: {id}</p>
        <p>Description: {description}</p>
        <p>Priority: {priority}</p>
      </div>
      <div>
        <label>
          Completed for the Week:
          {/* <input
            type="checkbox"
            checked={completedForWeek}
            onChange={() => onWeekCompleteToggle(id)}
          /> */}
        </label>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;

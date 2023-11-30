// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import EditTaskForm from './components/EditTaskForm';


const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={TaskList} />
          <Route path="/add" component={AddTaskForm} />
          <Route path="/edit/:taskId" component={EditTaskForm} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

import React, { useState } from 'react';
import { TaskRow } from './components/TaskRow';
import { TaskBanner } from './components/TaskBanner';

function App() {
  const [userName, setUserName] = useState('Ariel Tecay');
  const [taskItem, setTaskItem] = useState([
    { name: 'Task One', done: true },
    { name: 'Task Two', done: false },
    { name: 'Task Three', done: false },
    { name: 'Task Four', done: true }
  ])

  const toggleTask = task => setTaskItem(taskItem.map(t => (t.name === task.name ? { ...t, done: !t.done } : t)))

  const taskTableRows = () =>
    taskItem.map(task => (
      <TaskRow
        key={task.name}
        task={task}
        toggleTask={toggleTask}
      />
    ))

  return (
    <div>
      <TaskBanner
        userName={userName}
        taskItem={taskItem}
      />
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Description:</th>
            <th>Done:</th>
          </tr>
        </thead>
        <tbody>
          {taskTableRows()}
        </tbody>
      </table>
    </div>
  );
}

export default App;

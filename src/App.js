import React, { useState, useEffect } from 'react';
import { TaskRow } from './components/TaskRow';
import { TaskBanner } from './components/TaskBanner';
import { TaskCreator } from './components/TaskCreator'
import { VisibilityControl } from './components/VisibilityControl'


function App() {
  const [userName, setUserName] = useState('');
  const [taskItem, setTaskItem] = useState([])

  const [showCompleted, setshowCompleted] = useState(true)

  useEffect(() => {
    let data = localStorage.getItem('tasks');

    if (data !== null) {
      setTaskItem(JSON.parse(data));
    }
    else {
      setUserName("Api de Ariel Tecay")
      setTaskItem([
        // { name: 'Task Expample 1 ', done: true },
        // { name: 'Task Expample 2', done: false },
        // { name: 'Task Expample 3', done: false },
        // { name: 'Task Expample 4', done: true }
      ])
      setshowCompleted(true);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItem))
  }, [taskItem])

  const createNewTask = taskName => {
    if (!taskItem.find(t => t.name === taskName)) {
      setTaskItem([...taskItem, { name: taskName, done: false }])
    }
  }

  const toggleTask = task => setTaskItem(taskItem.map(t => (t.name === task.name ? { ...t, done: !t.done } : t)))

  const taskTableRows = (doneValue) =>
    taskItem
      .filter(task => task.done === doneValue)
      .map(task => (
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
      <TaskCreator
        callback={createNewTask}
      />
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Description:</th>
            <th>Done:</th>
          </tr>
        </thead>
        <tbody>
          {taskTableRows(false)}
        </tbody>
      </table>

      <div className="bg-secondary-text-white text-center p-2">
        <VisibilityControl
          description="Completed Tasks"
          isChecked={showCompleted}
          callback={checked => setshowCompleted(checked)}
        />
      </div>
      {
        showCompleted && (
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Description:</th>
                <th>Done:</th>
              </tr>
            </thead>
            <tbody>
              {taskTableRows(true)}
            </tbody>
          </table>
        )
      }
    </div>
  );
}

export default App;

import React from 'react';
import Task from './Task';
import TaskData from './Task.json';

function Tasks() {
  const tasks = TaskData;

  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map(task => (
          <Task
            key={task.id}
            taskName={task.taskName}
            taskDescription={task.taskDescription}
          />
        ))
      ) : (
        <div>No tasks available</div>
      )}
    </div>
  );
}

export default Tasks;

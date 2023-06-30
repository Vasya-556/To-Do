import React from 'react';
import AddTask from './AddTask';

function TopBar() {
  return (
    <div className='TopBar'>
        <h1>To-Do List:</h1>
        <AddTask />
    </div>
  );
}

export default TopBar;
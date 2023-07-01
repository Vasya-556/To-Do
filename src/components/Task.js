import React from 'react';
import { GrEdit } from 'react-icons/gr';
import { FaTrash } from 'react-icons/fa';

function Task({ taskName, taskDescription }) {
  return (
    <div className='Task'>
      <FaTrash className='delete-icon' />
      <GrEdit className='edit-icon' />
      <h3 className='TaskName'>{taskName}</h3>
      <p className='TaskDescription'>{taskDescription}</p>
    </div>
  );
}

export default Task;

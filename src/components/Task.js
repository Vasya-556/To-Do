import React from 'react';
import { GrEdit } from 'react-icons/gr';
import { FaTrash } from 'react-icons/fa';

function Task({ id, taskName, taskDescription, deleteTask }) {
  // const handleDelete = () => {
  //   deleteTask(id);
  // };

  return (
    <div className='Task'>
      <FaTrash className='delete-icon' /*onClick={Delete}*/ />
      <GrEdit className='edit-icon' /*onClick={Edit}*//>
      <h3 className='TaskName'>{taskName}</h3>
      <p className='TaskDescription'>{taskDescription}</p>
    </div>
  );
}

export default Task;
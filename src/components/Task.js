import React, { useState } from 'react';
import { GrEdit } from 'react-icons/gr';
import { FaTrash } from 'react-icons/fa';
import EditTask from './EditTask';

function Task({ id, taskName, taskDescription, deleteTask }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    deleteTask(id);
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className='Task'>
      <FaTrash className='delete-icon' onClick={handleDelete} />
      <GrEdit className='edit-icon' onClick={handleEdit} />
      <h3 className='TaskName'>{taskName}</h3>
      <p className='TaskDescription'>{taskDescription}</p>
      {isEditing && (
        <EditTask
          taskId={id}
          initialName={taskName}
          initialDescription={taskDescription}
          toggleEdit={handleEdit}
        />
      )}
    </div>
  );
}

export default Task;
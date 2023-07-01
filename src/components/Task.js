import React from 'react';
import { GrEdit } from "react-icons/gr";
import { FaTrash } from 'react-icons/fa';

function Task() {
  return (
<div className='Task'>
    <FaTrash className='delete-icon'/>
    <GrEdit className='edit-icon'/>
    <h3 className='TaskName'>TaskName</h3>
    <p className='TaskDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad sequi laborum fugit quisquam qui voluptatum explicabo. Quidem doloribus autem rem fuga tenetur, quae numquam! Fugit reprehenderit totam laborum voluptatum!</p>
</div>
  );
}

export default Task;
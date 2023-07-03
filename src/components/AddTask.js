import React, { useState } from 'react';
import { IoAddCircleOutline } from 'react-icons/io5';
import AddForm from './AddForm';

function AddTask() {
  const [showForm, setShowForm] = useState(false);

  const handleAddClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="add-task-container">
      {showForm && <AddForm />}
      <button className="AddTask" onClick={handleAddClick}>
        <IoAddCircleOutline />
      </button>
    </div>
  );
}

export default AddTask;
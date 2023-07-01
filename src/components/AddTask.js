import React, { useState } from 'react';
import { IoAddCircleOutline } from 'react-icons/io5';
import AddForm from './Add';

function AddTask() {
  const [showForm, setShowForm] = useState(false);

  const handleAddClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <div>
      {showForm && <AddForm />}
        <button className="AddTask" onClick={handleAddClick}>
          <IoAddCircleOutline />
        </button>
      </div>
    </div>
  );
}

export default AddTask;

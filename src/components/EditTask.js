import React, { useState } from 'react';
import { updateDoc, doc } from 'firebase/firestore';
import db from './Firebase';

function EditTask({ taskId, initialName, initialDescription, toggleEdit }) {
  const [editName, setEditName] = useState(initialName);
  const [editDescription, setEditDescription] = useState(initialDescription);

  const handleEditNameChange = (event) => {
    setEditName(event.target.value);
  };

  const handleEditDescriptionChange = (event) => {
    setEditDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await updateDoc(doc(db, 'tasks', taskId), {
        taskName: editName,
        taskDescription: editDescription
      });
      console.log('Document updated successfully');

      toggleEdit();
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

  return (
    <form className='edit-form' onSubmit={handleSubmit}>
      <input
        className='edit-name'
        type='text'
        value={editName}
        onChange={handleEditNameChange}
        required
      />
      <textarea
        className='edit-description'
        value={editDescription}
        onChange={handleEditDescriptionChange}
        required
      ></textarea>
      <button className='edit-button' type='submit'>Save</button>
    </form>
  );
}

export default EditTask;
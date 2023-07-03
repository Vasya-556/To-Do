import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import db from './Firebase.js'; 

const AddForm = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleTaskDescriptionChange = (event) => {
    setTaskDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!taskName || !taskDescription) {
      console.log('Task name and description are required');
      return;
    }

    try {
      const docRef = await addDoc(collection(db, 'tasks'), {
        taskName,
        taskDescription
      });
      console.log('Document added with ID:', docRef.id);

      // Очищення форми після успішного додавання документа
      setTaskName('');
      setTaskDescription('');
    } catch (error) {
      console.error('Error adding document:', error);
    }
  };

  return (
    <form className="add-form">
      <input
        className="add-name"
        type="text"
        value={taskName}
        onChange={handleTaskNameChange}
        placeholder="Task Name"
        required
      />
      <textarea
        className="add-description"
        value={taskDescription}
        onChange={handleTaskDescriptionChange}
        placeholder="Task Description"
        required
      ></textarea>
      <button type="submit" onClick={handleSubmit}>Add</button>
    </form>
  );
};

export default AddForm;
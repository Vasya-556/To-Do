import React from 'react';

function AddForm() {
  return (
    <form className='add-form'>
      <input className='add=name' type="text" />
      <textarea className='add-description'></textarea>
      <button type="button">Add</button>
    </form>
  );
}

export default AddForm;

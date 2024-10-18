import React from 'react';

function UserForm({ formState, dispatch, onSubmit, editingUserId }) {
  // Handle changes in the form fields and update the form state
  const handleChange = (event) => {
    dispatch({
      type: 'field',
      field: event.target.name,
      value: event.target.value
    });
  };

  return (
    // Name // Email // Phone No. (Tell No) Input Fields
    <form onSubmit={onSubmit}>
      <input
        type ="text"
        name ="name"
        value = {formState.name}
        onChange = {handleChange}
        placeholder ="Name"
        required
      />
      <input
        type ="email"
        name ="email"
        value = {formState.email}
        onChange = {handleChange}
        placeholder="Email"
        required
      />
      <input
        type ="tel"
        name ="phone"
        value ={formState.phone}
        onChange = {handleChange}
        placeholder= "Phone"
        required
      />
      <button type="submit">
        {editingUserId ? 'Update User' : 'Add User'}
      </button>
    </form>
  );
}

export default UserForm;
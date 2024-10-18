import React from 'react';

/**
 * UserTable component to display a list of users with options to edit/delete.
 * @param {Array} users - list of user objects to display in table.
 * @param {Function} onEdit - function to call when editing a user.
 * @param {Function} onDelete - function to call when deleting a user.
 */

function UserTable({ users, onEdit, onDelete }) {
  return (
    <table>
      <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <button onClick={() => onEdit(user)}>Edit</button>
                <button onClick={() => onDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
    </table>
  );
}

// React.memo to prevent unnecessary re-renders when props don't change
export default React.memo(UserTable);
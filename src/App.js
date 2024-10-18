import React, { useState, useEffect, useReducer, useMemo, useRef, useCallback } from 'react';
import axios from 'axios';
import { useLocalStorage } from './hooks/useLocalStorage';
import UserTable from './components/UserTable';
import UserForm from './components/UserForm';
import SearchBar from './components/SearchBar';

const initialState = {
  name: '',
  email: '',
  phone: ''
};

function formReducer(state, action) {
  switch (action.type) {
    case 'field':
      return { ...state, [action.field]: action.value };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

function App() {
  const [users, setUsers] = useLocalStorage('users', []);
  const [formState, dispatch] = useReducer(formReducer, initialState);
  const [editingUserId, setEditingUserId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (users.length === 0) {
      fetchUsers();
    }
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (err) {
      setError('Failed to fetch users. Please try again later.');
    }
  };

  const addUser = (user) => {
    setUsers([...users, { ...user, id: Date.now() }]);
  };

  const updateUser = (id, updatedUser) => {
    setUsers(users.map(user => user.id === id ? { ...user, ...updatedUser } : user));
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUserId) {
      updateUser(editingUserId, formState);
      setEditingUserId(null);
    } else {
      addUser(formState);
    }
    dispatch({ type: 'reset' });
  };

  const handleEdit = (user) => {
    setEditingUserId(user.id);
    dispatch({ type: 'field', field: 'name', value: user.name });
    dispatch({ type: 'field', field: 'email', value: user.email });
    dispatch({ type: 'field', field: 'phone', value: user.phone });
  };

  const handleDelete = (id) => {
    deleteUser(id);
  };

  const handleSearch = useCallback((value) => {
    setSearchTerm(value);
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  return (
    <div className="App">
      <h1>User Management</h1>
      {error && <div className="error">{error}</div>}
      <SearchBar onSearch={handleSearch} />
      <UserForm
        formState={formState}
        dispatch={dispatch}
        onSubmit={handleSubmit}
        editingUserId={editingUserId}
      />
      <UserTable
        users={filteredUsers}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
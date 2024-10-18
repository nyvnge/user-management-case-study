# User Management Application

A simple React application for managing user data with CRUD operations.

## Features

- Fetch and display user data from an API
- Create, Read, Update, and Delete user records
- Search functionality to filter users
- Data persistence using local storage

## Technologies Used

- React.js
- Axios for API requests
- Local Storage for data persistence

## Setup and Installation

1. Clone the repository:
   ```
   git clone [repository-url]
   ```

2. Navigate to the project directory:
   ```
   cd user-management-app
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Usage

- View the list of users in the table
- Use the search bar to filter users by name
- Click "Add User" to create a new user
- Use the "Edit" and "Delete" buttons in the table to modify user data

## Project Structure

- `src/App.js`: Main component
- `src/components/UserTable.js`: Displays user data
- `src/components/UserForm.js`: Form for adding/editing users
- `src/components/SearchBar.js`: Search functionality
- `src/hooks/useLocalStorage.js`: Custom hook for local storage

## API

The application initially fetches user data from:
[https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)

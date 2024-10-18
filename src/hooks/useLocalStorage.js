import { useState, useEffect } from 'react';

/**
 * Custom hook to  manage state synced with localStorage
 * @param {string} key - The key for localStorage.
 * @param {*} initialValue - The initial state value.
 * @returns {[any, Function]} - The stored value and setter function.
 */

export function useLocalStorage(key, initialValue) {
  // Store currnt value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      // This checks if item exist in Localstorage and if not it will use the InitialValue
      return item ? JSON.parse(item) : initialValue;
    } 
    catch (error) 
    {
      console.log(error);
      return initialValue;
    }
  });

  useEffect(() => {
      // Effect to update UseEffect when the stored value changes
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } 
    catch (error) 
    {
      console.log(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue]; // Return Value and Setter
}
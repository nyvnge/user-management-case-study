import React, { useRef } from 'react';

/**
 * SearchBar component to capture user input and trigger search.
 * @param {Function} onSearch - Callback function to handle search input.
 */


function SearchBar({ onSearch }) {
  // Creation of a reference for input element
  const inputRef = useRef(null);
  
  /**
   * Handles search by passing current input value to onSearch callback.
   */
  const handleSearch = () => {
    onSearch(inputRef.current.value); // Create reference for input element
  };

  return (
    <div>
      <input
        ref= {inputRef}
        type= "text"
        placeholder="Search by name"
        onChange= {handleSearch} // This triggers handleSearch on input chnge
      />
    </div>
  ); 
}

//  Use React.memo to optimize performance by preventing unnecessary re-renders
export default React.memo(SearchBar);
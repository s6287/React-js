import React, { useRef } from 'react';

const FocusAndFillExample = () => {
  // Create a ref for the input element
  const inputRef = useRef(null);
  
  // Function to focus the input and write "shivam"
  const focusAndWrite = () => {
    // Focus the input field
    inputRef.current.focus();
    
    // Write "shivam" in the input field
    inputRef.current.value = "shivam";
  };
  
  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">useRef Example</h2>
      
      <div className="mb-4">
        <input
          ref={inputRef}
          type="text"
          placeholder="Type here..."
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <button
        onClick={focusAndWrite}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Focus and Write "shivam"
      </button>
    </div>
  );
};

export default FocusAndFillExample;
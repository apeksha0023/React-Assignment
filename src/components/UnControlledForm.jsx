import React, { useRef } from 'react';

function UnControlledForm() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredText = inputRef.current.value;
    alert(`Entered Text: ${enteredText}`);
    inputRef.current.value = ''; 
  };

  return (
    <div style={{ maxWidth: '300px', margin: 'auto' }}>
      <h2>Uncontrolled Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} placeholder="Enter text" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UnControlledForm;

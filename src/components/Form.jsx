import React, { useState } from 'react';

function Form() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === '') {
      setError('Username is required');
    } else {
      setError('');
      alert(`Submitted Username: ${username}`);
    }
  };

  return (
    <div style={{ maxWidth: '300px', margin: 'auto' }}>
      <h2>Controlled Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          placeholder="Enter username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;

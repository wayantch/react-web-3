import React, { useState } from 'react';

const Form = ({ addTask }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTask(value);
      setValue('');
    }
  };

  return (
    <form className="bg-blue-500 w-full p-4 rounded-lg shadow-md" onSubmit={handleSubmit}>
      <input
        className="w-full bg-transparent border-b-2 border-gray-300 p-2 text-white mb-4 placeholder:text-gray-300 focus:outline-none"
        type="text"
        placeholder="Add a new task..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="bg-white text-blue-500 w-full p-2 rounded">Add Task</button>
    </form>
  );
};

export default Form;

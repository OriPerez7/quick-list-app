import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      addTodo(todo);
      setTodo('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex p-2">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="flex-1 p-2 border rounded"
        placeholder="Add a new task"
      />
      <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
        Add
      </button>
    </form>
  );
};

export default AddTodo;

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
        className="flex-1 p-2 border rounded font-body"
        placeholder="Create a new task"
      />
      <button type="submit" className="ml-2 p-2 bg-[#456990] text-white rounded font-body">
        Add
      </button>
    </form>
  );
};

export default AddTodo;

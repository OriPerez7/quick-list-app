import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { RiCheckboxBlankLine, RiCheckboxLine } from "react-icons/ri";

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
    const [check, setCheck] =useState(todo.completed);
    const handleClick = (id) => {
        setCheck(!check);
        toggleComplete(id);
    };

  return (
    <div className="flex justify-between items-center p-2 my-2 bg-gray-100 rounded">
      <button className='text-lg ml-1 mr-2' onClick={() => handleClick(todo.id)}>
        {check ? <RiCheckboxLine /> : <RiCheckboxBlankLine />}
      </button>
      <div
        className={`flex-1 ${check ? 'line-through' : ''}`}>
        {todo.text}
      </div>
      <button
        className="ml-2 mr-1 text-red-500 text-lg hover:text-2xl"
        onClick={() => deleteTodo(todo.id)}
      >
        <MdDelete />
      </button>
    </div>
  );
};

export default TodoItem;

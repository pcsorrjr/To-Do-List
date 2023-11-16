import React, { useState, useRef } from 'react';
import 'bootstrap';
import './App.css';

function App() {
  
  const [todos, setTodos] = useState([]);
  const todoInputRef = useRef();

  const handleAddTodo = () => {
    const newTodo = todoInputRef.current.value;
    if (newTodo.trim() !== '') {
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      todoInputRef.current.value = '';
    }
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };
  return (
    <div className="container text-center mt-5">
    <h1 className="mb-4">ToDo List App</h1>
    <div className="mb-4">
      <input
        type="text"
        ref={todoInputRef}
        className="form-control mr-2 custom-input"
        placeholder="Add a new to-do"
      />
      <button onClick={handleAddTodo} className="btn btn-primary custom-button">
        Add
      </button>
    </div>
    <ul className="list-group">
      {todos.map((todo, index) => (
        <li
          key={index}
          className={`list-group-item custom-list-item ${
            index % 2 === 0 ? 'even-item' : 'odd-item'
          }`}
          onClick={() => handleRemoveTodo(index)}
        >
          {todo}
        </li>
      ))}
    </ul>
  </div>
  );
}

export default App;

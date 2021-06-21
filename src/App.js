/* eslint-disable no-unused-vars */

import { directive } from "@babel/types";
import React, { useState } from "react";
import './App.css';

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div style={{ color: todo.isCompleted ? "green" : '' }}
      className='todo'>
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}> Complete</button>
        <button onClick={() => removeTodo(index)}>X</button>
      </div>
    </div>
  )
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: " dasdsadsadsad",
      isCompleted: false,
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "Build react ap todos",
      isCompleted: false,
    }
  ]);

  function TodoForm({ addTodo }) {
    const [value, setValue] = useState('');


    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue('')

    }

    return (
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='input'
          value={value}
          placeholder='Add Text...'
          onChange={e => setValue(e.target.value)}></input>
      </form>
    )
  }



  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className='app'>
      <div className='todo-list'>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
          <Todo key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  )
}


export default App;

import React from "react";
import "./Styles/Todo.css";

function Todo({ todo, index }) {
  return (
    <div className="todo-container">
      <p>{todo.text}</p>
      <button>Check</button>
      <button>Delete</button>
    </div>
  );
}

export default Todo;

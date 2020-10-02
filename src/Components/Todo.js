import React from "react";
import "./Styles/Todo.css";

function Todo({ todo, index, completeTodo, deleteTodo }) {
  return (
    <div className="todo-container">
      <p
        className="todo-text"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text}
      </p>
      <button
        className="btn complete-button"
        onClick={() => completeTodo(index)}
      >
        ✓
      </button>
      <button className="btn delete-button" onClick={() => deleteTodo(index)}>
        X
      </button>
    </div>
  );
}

export default Todo;

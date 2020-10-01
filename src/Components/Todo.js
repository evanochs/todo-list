import React from "react";
import "./Styles/Todo.css";

function Todo({ todo, index, completeTodo, deleteTodo }) {
  return (
    <div className="todo-container">
      <p style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
        {todo.text}
      </p>
      <button onClick={() => completeTodo(index)}>Check</button>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </div>
  );
}

export default Todo;

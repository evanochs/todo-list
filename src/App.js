import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Todo from "./Components/Todo";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Walk the dog",
      isCompleted: false,
    },
    {
      text: "Go to the gym",
      isCompleted: false,
    },
    {
      text: "Take out the trash",
      isCompleted: false,
    },
  ]);
  const addTodo = (text) => {
    const newTodo = [...todos, { text }];
    setTodos(newTodo);
  };
  return (
    <div className="App">
      <Form addTodo={addTodo} />
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;

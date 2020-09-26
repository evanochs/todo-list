import React, { useState } from "react";
import "./App.css";
import Todo from "./Components/Todo";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Walk the dog",
      isCompleted: false,
    },
  ]);
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";

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
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;

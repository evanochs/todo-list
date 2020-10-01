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
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const completeTodo = (index) => {
    const newTodos = [...todos];
    if (newTodos[index].isCompleted === false) {
      newTodos[index].isCompleted = true;
    } else {
      newTodos[index].isCompleted = false;
    }
    setTodos(newTodos);
  };
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="App">
      <Form addTodo={addTodo} />
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

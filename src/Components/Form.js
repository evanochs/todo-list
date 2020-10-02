import React, { useState } from "react";
import "./Styles/Form.css";

function Form({ addTodo }) {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="new-todo"
          id="new-todo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add Todo..."
        />
        <button>Enter</button>
      </form>
    </div>
  );
}

export default Form;

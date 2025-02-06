import React, { useState } from "react";

export default function NewTodoForm({ addTodo }) {
  const INITIAL_STATE = {
    task: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ task: formData.task });
    setFormData(INITIAL_STATE);
  };

  return (
    <>
      <h1>new todo form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Task</label>
        <input
          type="text"
          name="task"
          placeholder="enter task"
          id="task"
          value={formData.task}
          onChange={handleChange}
        />
      </form>
      <button>Add task</button>
    </>
  );
}

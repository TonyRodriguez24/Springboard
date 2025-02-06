import React, {useState} from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
//want to pass down the function for adding a new todo to form to the new todo form function

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <h1>TodoList</h1>

      {todos.map((todo) => 
        <Todo task={todo.task} />
      )}

      <NewTodoForm addTodo={addTodo} />
    </>
  );
}

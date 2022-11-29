import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import "bootstrap/dist/css/bootstrap.min.css";
export default function ToDoList() {
  const [todos, setTodos] = useState([
    { title: "exercise", selected: false, id: 0 },
    { title: "laundry", selected: false, id: 1 },
    { title: "dishes", selected: false, id: 2 },
    { title: "study", selected: false, id: 3 },
  ]);

  function onToDoItemClicked(id) {
    console.log("id" + id);
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id); //same ids
    todo.selected = !todo.selected;
    setTodos(newTodos);
  }

  function deleteSelected() {
    const newTodos = todos.filter((todo) => todo.selected === false);
    setTodos(newTodos);
  }

  return (
    <div className="ToDoListContainer">
      {todos.map((todo) => (
        <ToDoItem todo={todo} key={todo.id} onClick={onToDoItemClicked} />
      ))}
      <div
        className="DeleteButton button btn bg-danger d-flex justify-content-center
      align-items-center"
        onClick={deleteSelected}
      >
        <p>Delete</p>
      </div>
    </div>
  );
}

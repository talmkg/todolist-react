import React, { useState } from "react";

function getClassName(selected) {
  if (selected) {
    return "ToDoItemContainer selected";
  } else {
    return "ToDoItemContainer";
  }
}

export default function ToDoItem({ todo, onClick }) {
  //const [selected, setSelected] = useState(false); deleted, we get info if its selected from ToDoList
  return (
    //<div className={getClassName(selected) + " p-3 m-3"} onClick={onClick}>
    <div
      className={getClassName(todo.selected) + " button p-3 m-3"}
      onClick={() => onClick(todo.id)}
    >
      <p className="ToDoTitle">{todo.title}</p>
    </div>
  );
}

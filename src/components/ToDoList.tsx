import React from "react";

interface ToDoListProps {
  items: { id: string; text: string }[];
  onDeleteToDo: (id: string) => void;
}

const ToDoList: React.FC<ToDoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((toDo) => (
        <li key={toDo.id}>
          <span>{toDo.text}</span>
          <button onClick={props.onDeleteToDo.bind(null, toDo.id)}>
            DELETE
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;

import React, { useState } from "react";
import ToDoList from "./components/ToDoList";
import NewToDo from "./components/NewToDo";
import { ToDo } from "./toDo.model";

const App: React.FC = () => {
  const [toDos, setToDos] = useState<ToDo[]>([]);

  const toDoAddHandler = (text: string) => {
    setToDos((prevToDos) => [
      ...prevToDos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const toDoDeleteHandler = (toDoId: string) => {
    setToDos((prevToDos) => {
      return prevToDos.filter((toDo) => toDo.id !== toDoId);
    });
  };

  return (
    <div className="App">
      <NewToDo onAddToDo={toDoAddHandler} />
      <ToDoList items={toDos} onDeleteToDo={toDoDeleteHandler} />
    </div>
  );
};

export default App;

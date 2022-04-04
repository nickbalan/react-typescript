import React, { useRef } from "react";
import "./NewToDo.css";

type NewToDoProps = {
  onAddToDo: (toDoText: string) => void;
};

const NewToDo: React.FC<NewToDoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const toDoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddToDo(enteredText);
  };
  return (
    <form onSubmit={toDoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="toDo-text">ToDo Text</label>
        <input type={"text"} id="toDo-text" ref={textInputRef} />
      </div>
      <button type="submit">Add ToDo</button>
    </form>
  );
};

export default NewToDo;

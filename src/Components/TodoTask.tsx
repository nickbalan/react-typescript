import React from "react";
import { ITask } from "../Interfaces";

/* Defines the interface for Props */
interface Props {
  task: ITask;
  /* Pass the function as Prop */
  completeTask(taskNameToDelete: string): void;
}

/* Defines the type of object as Props */
const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
      </div>
      <button
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        X
      </button>
    </div>
  );
};

export default TodoTask;

import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import TodoTask from "./Components/TodoTask";
import { ITask } from "./Interfaces";

/* App: FC - Defines type of the App function as FunctionComponent (FC) in React */ 
const App: FC = () => {
  /* Defines the types for useState<> */
  const [task, setTask] = useState<string>(""); 
  const [deadline, setDealine] = useState<number>(0);
  /* Defines the types for useState as an array of ITask interface */
  const [todoList, setTodoList] = useState<ITask[]>([]);

  /* Defines the type for the event. ChangeEvent<HTMLInputElement> - represent any events that involves changes and inputs of the HTML input elements*/
  /* Sets the return type of the function to void - this function is not returning anything  */
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      /* converts into a number */
      setDealine(Number(event.target.value));
    }
  };

  /* Sets the return type of the function to void - this function is not returning anything  */
  /* Adds the tasks */
  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDealine(0);
  };

  /* Sets the return type of the function to void - this function is not returning anything  */
  /* Deletes the tasks */
  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Write a task and how many days until the deadline"
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Deadline (in Days)..."
            name="deadline"
            value={deadline}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import Task from "./task";

export default function TodoList() {
  const [todolist, setTodolist] = useState(() => {
    const localTask = localStorage.getItem("todos");
    return localTask ? JSON.parse(localTask) : [];
  });
  const [newtask, setNewtask] = useState("");

  const handleChange = (event) => {
    setNewtask(event.target.value);
  };

  const handleClick = () => {
    let Newtodolist = [...todolist, newtask];
    setTodolist(Newtodolist);
    localStorage.setItem("todos", JSON.stringify(Newtodolist));
    setNewtask("");
  };

  const deleteTask = (taskName) => {
    const curToDoList = todolist.filter((task) => {
      if (task === taskName) {
        return false;
      } else {
        return true;
      }
    });
    setTodolist(curToDoList);
    localStorage.setItem("todos", JSON.stringify(curToDoList));
  };
  return (
    <div className="flex flex-col justify-center items-center bg-amber-300">
      <div className="ToDoList bg-gray-400 ">Todolist</div>
      <div className="Page flex flex-col gap-2 bg-purple-500 p-2 h-120 w-90">
        <div className="flex gap-2">
          <input
            className="bg-white px-4 h-10 w-3/4"
            onChange={handleChange}
            value={newtask}
          />
          <button className=" h-10 bg-blue-300 w-1/4" onClick={handleClick}>
            ADD TASK
          </button>
        </div>
        <div className="bg-white h-[90%] w-full flex flex-col gap-2 p-2">
          {todolist.map((task) => {
            return <Task task={task} deleteTask={deleteTask} />;
          })}
        </div>
      </div>
    </div>
  );
}

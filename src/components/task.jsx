import React from "react";

export default function Task({ task, deleteTask }) {
  return (
    <div className="flex  justify-between bg-gray-200 p-2">
      {task}
      <button
        className="bg-red-400 w-[10%] rounded-full justify-center items-center p-1"
        onClick={() => deleteTask(task)}
      >
        X
      </button>
    </div>
  );
}

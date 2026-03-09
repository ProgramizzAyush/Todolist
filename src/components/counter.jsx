import React, { useState } from "react";

export default function Counter() {
  const [count, setcount] = useState(0);
  return (
    <div
      className="App bg-amber-500 h-20
       w-screen  flex gap-7 items-center justify-center "
    >
      <button
        className="  p-3  border duration-300 border-green-500 hover:bg-transparent rounded-3xl bg-green-500 "
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        className=" p-3  border-2 border-red-500 hover:bg-transparent rounded-3xl bg-red-500 duration-300 "
        onClick={() => {
          setcount(count - 1);
        }}
      >
        Decrease
      </button>
      <button
        className=" p-3  border border-blue-500 hover:bg-transparent rounded-3xl duration-300 bg-blue-700 "
        onClick={() => {
          setcount(0);
        }}
      >
        SetToZero
      </button>
      <div className="rounded-full px-6.5 justify-center py-3.5 border border-cyan-500 hover:bg-transparent duration-300 bg-cyan-400 flex w-7 items-center ">
        {count}
      </div>
    </div>
  );
}

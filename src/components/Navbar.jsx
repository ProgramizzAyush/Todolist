import React from "react";

export default function Navbar() {
  return (
    <div className="navbar flex flex-row justify-between p-2 m-4 bg-black rounded-4xl">
      <button className="Ayush rounded-full hover:bg-gray-300 p-2 px-4 font-semibold bg-white cursor-pointer justify-center items-center">
        Ayush
      </button>
      <div className="Options flex flex-row w-auto justify-between gap-4 text-black">
        <button className="Home rounded-4xl px-4 py-2 hover:bg-gray-300 duration-300 font-semibold bg-white ">
          Todolist
        </button>
        <button className="Resume rounded-4xl hover:bg-gray-300 px-4 py-2  bg-white font-semibold">
          Counter
        </button>
      </div>
      <button className="Email rounded-4xl px-4 hover:bg-gray-300 bg-white text-black font-semibold">
        Ayush07@gmail.com
      </button>
    </div>
  );
}

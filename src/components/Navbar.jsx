import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="gap-3 h-20 w-full flex justify-center items-center">
      <div className="navbar flex flex-row justify-between p-2 w-full bg-black rounded-4xl">
        <NavLink
          to={"/"}
          className="Ayush rounded-full hover:bg-gray-300 p-2 px-4 font-semibold bg-white cursor-pointer justify-center items-center"
        >
          Home
        </NavLink>
        <div className="Options flex flex-row w-auto justify-between gap-4 text-black">
          <NavLink
            to={"/todolist"}
            className="Home rounded-4xl px-4 py-2 hover:bg-gray-300 duration-300 font-semibold bg-white "
          >
            Todolist
          </NavLink>
          <NavLink
            to={"/counter"}
            className="Resume rounded-4xl hover:bg-gray-300 px-4 py-2  bg-white font-semibold"
          >
            Counter
          </NavLink>
          <NavLink
            to={"/agepredict"}
            className="Resume rounded-4xl hover:bg-gray-300 px-4 py-2  bg-white font-semibold"
          >
            AgePredict
          </NavLink>
        </div >
        <NavLink
          to={"https://mail.google.com/mail/u/0/#inbox?compose=new"}
          className="Email rounded-4xl px-4 hover:bg-gray-300 flex justify-center items-center bg-white text-black font-semibold"
        >
          Ayush07@gmail.com
        </NavLink>
      </div>
    </div>
  );
}

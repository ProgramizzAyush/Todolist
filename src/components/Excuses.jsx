import Axios from "axios";
import React, { useEffect, useState } from "react";

export default function Excuses() {
  const [genExcuse, setGenExcuse] = useState("");
  const fetchExcuse = (excuse) => {
    let res = Axios.get(
      `https://excuser.herokuapp.com/v1/excuse/${excuse}`,
    ).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="Page h-screen w-screen bg-black ">
      <div className="flex flex-col gap-4 p-2">
        <button
          className="bg-green-300 h-8 w-15"
          onClick={() => {
            fetchExcuse("party");
          }}
        >
          Party
        </button>
        <button
          className="bg-yellow-300  h-8 w-15"
          onClick={() => {
            fetchExcuse("family");
          }}
        >
          Family
        </button>
        <button
          className="bg-purple-300  h-8 w-15 "
          onClick={() => {
            fetchExcuse("office");
          }}
        >
          Office
        </button>
      </div>
    </div>
  );
}

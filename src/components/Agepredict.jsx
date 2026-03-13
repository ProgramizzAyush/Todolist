import React from "react";
import Axios from "axios";
import { useEffect, useState } from "react";
export default function Agepredict() {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedage] = useState();

  const fetchData = () => {
    let res = Axios.get(`https://api.agify.io/?name=${name}`)
      .then((res) => {
        console.log(res.data.age);
        setPredictedage(res.data.age);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="Page h-screen w-screen bg-amber-400 py-10 px-5 ">
      <div className="flex gap-2 h-12">
        <button
          className=" border-2 border-black px-2 font-semibold bg-purple-400 text-black"
          onClick={fetchData}
        >
          Predict Age
        </button>
        <input
          className="border-2 font-semibold "
          placeholder
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <div className="border-2 p-4 flex justify-center items-center">
          {predictedAge}
        </div>
      </div>
    </div>
  );
}

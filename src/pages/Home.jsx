import React, { useState } from "react";
import Changehome from "../components/changehome";

export default function Home({setUserName, userName}) {
  return (
    <div className="font-mono text-blue-500  ">
      <h1>
        Hi, I’m {userName}, a Frontend Developer who builds responsive and
        user-friendly web experiences.
        <p>
          I specialize in turning ideas into clean, interactive interfaces using
          modern web technologies.
        </p>
      </h1>
      <Changehome setUserName={setUserName} />
    </div>
  );
}

import React, { useState } from "react";

export default function Changehome({ setUserName }) {
  const [tempName, setTempName] = useState("");
  return (
    <div className="flex gap-3">
      <input
        onChange={(event) => {
          setTempName(event.target.value);
        }}
        className="border bg-white "
      />
      <button
        onClick={() => {
          setUserName(tempName);
        }}
        className="h-full p-2 bg-amber-400"
      >
        CHANGE
      </button>
    </div>
  );
}

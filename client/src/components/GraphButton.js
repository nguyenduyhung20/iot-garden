import React from "react";

function GraphButton({ name, handleType }) {
  return (
    <div
      onClick={() => { handleType(name) }}
      className={"w-full h-full py-2 px-4 flex justify-center items-center rounded-lg shadow-md text-xl font-semibold text-gray-700 border-2 border-blue-200 bg-white hover:bg-green-200 hover:border-green-500 transition-colors duration-200 cursor-pointer"}
    >
      <h2>{name}</h2>
    </div>
  );
}

export default GraphButton;

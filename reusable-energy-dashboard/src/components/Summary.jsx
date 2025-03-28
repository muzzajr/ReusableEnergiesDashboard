import React from "react";

function Summary({ title, text }) {
  return (
    <div className="max-w-[800px] w-full bg-white top-0 p-4 rounded-lg shadow-md mb-10">
      <h1 className="text-left text-xl">{title}</h1>
      <p className="text-sm ml-3 pt-2">{text}</p>
    </div>
  );
}

export default Summary;

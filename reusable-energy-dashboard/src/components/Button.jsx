import React from "react";

function Button({ text, onClick }) {
  return (
    <button
      className="bg-white max-w-sm break-words h-min-content px-4 py-2 text-sm rounded-lg mb-4 shadow-md hover:bg-slate-100 hover:cursor-pointer transition duration-100"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;

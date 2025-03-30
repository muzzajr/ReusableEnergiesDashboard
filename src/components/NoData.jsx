import React from "react";

function NoData() {
  return (
    <div className="flex items-center justify-center w-full h-2/3 rounded-lg">
      <div className="max-w-[800px] w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-center mb-4">No Data To Show</h2>
      </div>
    </div>
  );
}

export default NoData;

import React from "react";

const CurrentState = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      <div className="backdrop-blur-lg bg-black/40 rounded-[20px] p-6 py-4">
        <p className="text-sm font-light">Current Consumption</p>
        <p className="mt-2.5 text-2xl font-medium">1,5 kWh</p>
      </div>

      <div className="backdrop-blur-lg bg-white/10 rounded-[20px] p-6 py-4">
        <p className="text-sm font-light">Humidity</p>
        <p className="mt-2.5 text-2xl font-medium">48,2%</p>
      </div>

      <div className="backdrop-blur-lg bg-black/40 rounded-[20px] p-6 py-4">
        <p className="text-sm font-light">Temperature</p>
        <p className="mt-2.5 text-2xl font-medium">32 C</p>
      </div>
    </div>
  );
};

export default CurrentState;

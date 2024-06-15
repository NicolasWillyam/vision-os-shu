import React from "react";

const PowerConsumption = () => {
  return (
    <div className="w-full h-full backdrop-blur-lg bg-black/40 rounded-[24px] p-4 px-5">
      <p className="mt-2.5">
        Power Consumption <span className="text-white/50 text-sm">(kWh)</span>
      </p>
      <div className="flex gap-5 mt-4">
        <ul className="w-fit grid grid-cols-1 gap-5 text-xs mb-3">
          <li>170</li>
          <li>130</li>
          <li>90</li>
          <li>50</li>
          <li>0</li>
        </ul>
        <div className="flex gap-4 h-full text-xs font-light mr-2">
          <div className="h-[200px] flex items-end gap-4">
            <div>
              <div className="w-4 h-20 rounded-full bg-[#8F9194] mx-auto mb-2"></div>
              <p>Jan</p>
            </div>
            <div>
              <div className="w-4 h-36 rounded-full bg-[#8F9194] mx-auto mb-2"></div>
              <p>Jan</p>
            </div>
            <div>
              <div className="w-4 h-32 rounded-full bg-[#8F9194] mx-auto mb-2"></div>
              <p>Jan</p>
            </div>
            <div>
              <div className="w-4 h-44 rounded-full bg-blue-500 mx-auto mb-2"></div>
              <p>Jan</p>
            </div>
            <div>
              <div className="w-4 h-24 rounded-full bg-[#8F9194] mx-auto mb-2"></div>
              <p>Jan</p>
            </div>
            <div>
              <div className="w-4 h-32 rounded-full bg-[#8F9194] mx-auto mb-2"></div>
              <p>Jan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerConsumption;

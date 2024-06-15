/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { BsGrid } from "react-icons/bs";
import { IoChevronDownOutline } from "react-icons/io5";
import { Slider } from "./ui/slider";
import Image from "next/image";

interface Props {
  value: number[];
  setValue: React.Dispatch<React.SetStateAction<number[]>>;
}

const DeviceCard: React.FC<Props> = ({ value, setValue }) => {
  const [sliderValue, setSliderValue] = useState<number[]>([0]);

  const handleSliderChange = (value: number[]) => {
    setValue(value);
  };
  return (
    <div className="w-fit flex gap-4 backdrop-blur-lg bg-white/10 p-4 rounded-[24px]">
      <div className="w-[160px] h-full bg-white/10 rounded-[16px] ">
        <Image src={"/lamp.png"} alt="images" width={160} height={160} />
      </div>
      <div className="w-[340px]">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[11px] font-light">Device</p>
            <p className="text-base font-medium">
              Luminens LED Modern Lighting
            </p>
          </div>
          <div className="w-8 h-8 rounded-full backdrop-blur-lg bg-white/10 flex items-center justify-center">
            <BsGrid />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 backdrop-blur-lg bg-white/10 p-4 rounded-[16px]">
          <div className="text-center border-r-[1px]">
            <p className="flex gap-2 w-full justify-center text-2xl font-medium">
              <span>4H</span>
              <span>20M</span>
            </p>
            <p className="text-[11px] font-light">Time Usage</p>
          </div>

          <div className="text-center">
            <p className="flex gap-2 w-full justify-center text-2xl font-medium">
              <span>72W</span>
            </p>
            <p className="text-[11px] font-light">Energy Comsumption</p>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="w-full backdrop-blur-lg bg-white/10 p-4 py-2 rounded-[16px]">
            <p className="text-xs my-1">On from</p>
            {/* <DropdownBox /> */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <p className="text-base">06:00</p>
                <p className="text-xs">PM</p>
              </div>
              <IoChevronDownOutline />
            </div>
          </div>

          <div className="w-full backdrop-blur-lg bg-white/10 p-4 py-2 rounded-[16px]">
            <p className="text-xs my-1">Off at</p>
            {/* <DropdownBox /> */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <p className="text-base">06:00</p>
                <p className="text-xs">AM</p>
              </div>
              <IoChevronDownOutline />
            </div>
          </div>
        </div>
        <div className="w-full mt-3">
          {/* <Slider defaultValue={[33]} max={100} step={1} /> */}
          <Slider
            value={value}
            onValueChange={handleSliderChange}
            min={0}
            max={100}
            step={1}
          />
        </div>
      </div>
    </div>
  );
};

export default DeviceCard;

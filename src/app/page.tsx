"use client";
import { DropdownBox } from "@/components/dropdown-box";
import React, { useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";
import { BsGrid } from "react-icons/bs";
import { Switch } from "@/components/ui/switch";

import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import DeviceCard from "@/components/device-card";
import PowerConsumption from "@/components/power-consumption";
import CurrentState from "@/components/current-state";
import { GoPlus } from "react-icons/go";

interface Menu {
  label: string;
}

import { IoStatsChart } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoPlayCircle } from "react-icons/io5";

const Page = () => {
  const [value, setValue] = useState<number[]>([50]);
  const [openWindowState, setOpenWindowState] = useState<boolean>(false);

  const handleWindowState = () => {
    if (openWindowState == false) {
      setOpenWindowState(true);
    } else {
      setOpenWindowState(false);
    }
  };

  return (
    <div className="w-full h-screen relative flex items-center px-20 bg-cover bg-center bg-no-repeat bg-[url('https://cdn.dribbble.com/userupload/11848883/file/original-a8eaf749aac4f52d37f7ea8346030f76.jpg?resize=1200x900')]">
      <div
        style={{ backgroundColor: `rgba(0, 0, 0, ${1 - value[0] / 100})` }}
        className="w-full h-screen absolute top-0 left-0 flex gap-5 items-center px-5 bg-cover bg-center bg-no-repeat bg-black"
      >
        <div className="p-2 grid grid-cols-1 gap-2 backdrop-blur-lg bg-white/10 rounded-full ">
          <div
            style={{
              backgroundColor: openWindowState ? `rgba(0, 0, 0, 0.3)` : ``,
            }}
            className="p-2 rounded-full hover:bg-white/30 duration-300 cursor-pointer"
          >
            <GoHomeFill size={20} onClick={handleWindowState} />
          </div>
          <div className="p-2 rounded-full hover:bg-white/30 duration-300 cursor-pointer">
            <IoStatsChart size={18} />
          </div>
          <div className="p-2 rounded-full hover:bg-white/30 duration-300 cursor-pointer">
            <GoPlus size={20} />
          </div>
          <div className="p-2 rounded-full hover:bg-white/30 duration-300 cursor-pointer">
            <IoPlayCircle size={20} />
          </div>
          <div className="p-2 rounded-full hover:bg-white/30 duration-300 cursor-pointer">
            <IoSearch size={20} />
          </div>
        </div>

        <div
          style={{ display: openWindowState ? "block" : "none" }}
          className="relative"
        >
          <div className="w-auto h-auto backdrop-blur-lg bg-white/10 rounded-[30px] p-5">
            <div className="w-[860px] grid grid-cols-1 gap-5">
              <div className="flex gap-5">
                <DeviceCard value={value} setValue={setValue} />
                <PowerConsumption />
              </div>
              <CurrentState />

              <div className="grid grid-cols-4 gap-5">
                <div className="backdrop-blur-lg bg-white/10 h-full rounded-[24px] p-5">
                  <div className="flex w-full justify-between items-center">
                    <div className="w-8 h-8 rounded-full backdrop-blur-lg bg-white/10 flex items-center justify-center">
                      <BsGrid />
                    </div>
                    <Switch />
                  </div>
                  <div className="mt-8">
                    <p className="text-[11px] font-light">Gaabor</p>
                    <p className="text-lg font-medium">Humidifier</p>
                  </div>
                </div>

                <div className="backdrop-blur-lg bg-black/40 h-full rounded-[24px] p-5">
                  <div className="flex w-full justify-between items-center">
                    <div className="w-8 h-8 rounded-full backdrop-blur-lg bg-white/10 flex items-center justify-center">
                      <BsGrid />
                    </div>
                    <Switch />
                  </div>
                  <div className="mt-8">
                    <p className="text-[11px] font-light">Gaabor</p>
                    <p className="text-lg font-medium">Humidifier</p>
                  </div>
                </div>

                <div className="backdrop-blur-lg bg-white/10 h-full rounded-[24px] p-5">
                  <div className="flex w-full justify-between items-center">
                    <div className="w-8 h-8 rounded-full backdrop-blur-lg bg-white/10 flex items-center justify-center">
                      <BsGrid />
                    </div>
                    <Switch />
                  </div>
                  <div className="mt-8">
                    <p className="text-[11px] font-light">Gaabor</p>
                    <p className="text-lg font-medium">Humidifier</p>
                  </div>
                </div>

                <div className="backdrop-blur-lg bg-black/40 h-full rounded-[24px] p-5">
                  <div className="flex w-full justify-between items-center">
                    <div className="w-8 h-8 rounded-full backdrop-blur-lg bg-white/10 flex items-center justify-center">
                      <BsGrid />
                    </div>
                    <Switch />
                  </div>
                  <div className="mt-8">
                    <p className="text-[11px] font-light">Gaabor</p>
                    <p className="text-lg font-medium">Humidifier</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-fit mx-auto flex items-center gap-2.5 p-2.5 backdrop-blur-lg bg-white/10 rounded-full mt-2.5">
            <div className="backdrop-blur-lg bg-white/10 rounded-full p-2.5 px-5 text-xs font-light">
              Living room
            </div>
            <div className=" rounded-full p-2.5 px-5 text-xs font-light">
              Bedroom
            </div>
            <div className=" rounded-full p-2.5 px-5 text-xs font-light">
              Kitchen
            </div>
            <div className=" rounded-full p-2.5 px-5 text-xs font-light">
              Backyard
            </div>
            <div className=" rounded-full p-2.5 px-5 text-xs font-light">
              Garage
            </div>

            <div className="w-10 h-10 -my-1 flex items-center justify-center backdrop-blur-lg bg-white/10 rounded-full text-xs font-light">
              <GoPlus size={20} />
            </div>
          </div>
        </div>

        <div
          style={{ display: openWindowState ? "grid" : "none" }}
          className="p-2 grid grid-cols-1 gap-2 backdrop-blur-lg bg-white/10 rounded-full -ml-2.5"
        >
          <div className="p-2 rounded-full backdrop-blur-lg bg-white/10 cursor-pointer">
            <IoChevronBackOutline onClick={handleWindowState} size={20} />
          </div>
          <div className="p-2 rounded-full backdrop-blur-lg bg-white/10 cursor-pointer">
            <IoChevronForwardOutline size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

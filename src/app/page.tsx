"use client";
import { DropdownBox } from "@/components/dropdown-box";
import React, { useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";
import { BsGrid } from "react-icons/bs";
import { Switch } from "@/components/ui/switch";
import { PiLeaf } from "react-icons/pi";
import "./globals.css";

import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import DeviceCard from "@/components/device-card";
import PowerConsumption from "@/components/power-consumption";
import CurrentState from "@/components/current-state";
import { GoPlus } from "react-icons/go";
import { GoSun } from "react-icons/go";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { BsWind } from "react-icons/bs";
import { IoSnowOutline } from "react-icons/io5";

import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { IoPlay } from "react-icons/io5";
import { TbMinus } from "react-icons/tb";

interface Menu {
  label: string;
}

import { IoStatsChart } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoPlayCircle } from "react-icons/io5";
import Image from "next/image";

const Page = () => {
  const [value, setValue] = useState<number[]>([50]);
  const [openWindowState, setOpenWindowState] = useState<boolean>(false);
  const [extendWindowState, setExtendWindowState] = useState<boolean>(false);

  const handleWindowState = () => {
    setOpenWindowState(!openWindowState);
  };

  const handleExtendWindowState = () => {
    setExtendWindowState(!extendWindowState);
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
          <div className="flex h-full">
            <div
              className={`w-auto h-auto backdrop-blur-lg bg-white/10 ${
                extendWindowState ? "rounded-l-[30px]" : "rounded-[30px]"
              } p-5`}
            >
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
            <div
              className={` ${
                extendWindowState ? "block" : "hidden"
              } w-[320px] h-auto backdrop-blur-lg bg-black/20  rounded-r-[30px]  p-5`}
            >
              <div className="text-center text-xl font-medium">10:02 PM</div>
              <div className="w-9 h-0.5 rounded-full mt-3 mx-auto bg-white/50"></div>
              <div className="flex w-full justify-between items-center px-2.5 mt-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full backdrop-blur-lg bg-white/10 flex items-center justify-center">
                    <BsGrid />
                  </div>
                  <p className="text-lg font-medium">Air Conditioner</p>
                </div>
                <Switch />
              </div>
              <div className="mt-2.5 px-2.5">
                <Image
                  src={"/air-conditioner.png"}
                  alt="image"
                  width={240}
                  height={300}
                  className="mt-10 mb-6 mx-auto"
                />
                <div className="flex items-center justify-center gap-3 py-1">
                  <div className="h-6 w-6 rounded-full backdrop-blur-lg bg-white/30 flex items-center justify-center">
                    <TbMinus size={14} />
                  </div>
                  <div className="text-center text-2xl gap-0.5 flex items-start justify-center font-medium">
                    <p>24</p>
                    <p className="text-sm">o</p>
                    <p>C</p>
                  </div>
                  <div className="h-6 w-6 rounded-full backdrop-blur-lg bg-white/30 flex items-center justify-center">
                    <GoPlus size={16} />
                  </div>
                </div>
              </div>
              <div className="w-full grid grid-cols-4 gap-1.5 mt-5">
                <div className="backdrop-blur-lg bg-white/20 rounded-[14px] p-5 h-16 flex items-center justify-center">
                  <div className="flex flex-col items-center2">
                    <GoSun size={20} />
                    <p className="text-xs mt-1 font-light">Hot</p>
                  </div>
                </div>
                <div className="backdrop-blur-lg bg-white/20 rounded-[14px] p-5 h-16 flex items-center justify-center">
                  <div className="flex flex-col items-center ">
                    <PiLeaf size={20} />
                    <p className="text-xs mt-1 font-light">Eco</p>
                  </div>
                </div>
                <div className="backdrop-blur-lg bg-white/20 rounded-[14px] p-5 h-16 flex items-center justify-center">
                  <div className="flex flex-col items-center ">
                    <BsWind size={20} />
                    <p className="text-xs mt-1 font-light">Fan</p>
                  </div>
                </div>
                <div className="backdrop-blur-lg bg-white/40 rounded-[14px] p-5 h-16 flex items-center justify-center">
                  <div className="flex flex-col items-center ">
                    <IoSnowOutline size={20} />
                    <p className="text-xs mt-1 font-light">Cold</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 backdrop-blur-lg bg-white/20 rounded-[24px] p-5 h-48 flex flex-col items-center justify-between">
                <div className="mx-auto mt-2 text-center">
                  <p className="text-[11px] font-light">Ericdoa x Valorant</p>
                  <p className="text-sm ">Greater Than One</p>
                </div>
                <div className="w-full">
                  <div className="h-1.5 w-full rounded-full bg-white/20">
                    <div className="h-1.5 w-1/2 rounded-full bg-white"></div>
                    <div className="flex items-center justify-between text-[10px] pt-1">
                      <div className="">1:12</div>
                      <p>2:24</p>
                    </div>
                  </div>
                </div>

                <div className="w-full flex items-center justify-between mt-2">
                  <div className="h-10 w-10 rounded-full backdrop-blur-lg bg-white/10 flex items-center justify-center">
                    <TbPlayerTrackNextFilled size={14} />
                  </div>
                  <div className="h-10 w-10 rounded-full backdrop-blur-lg bg-white/10 flex items-center justify-center">
                    <TbPlayerTrackPrevFilled size={14} />
                  </div>
                  <div className="h-10 w-10 rounded-full backdrop-blur-lg bg-white/10 flex items-center justify-center">
                    <IoPlay size={20} />
                  </div>
                  <div className="h-10 w-10 rounded-full backdrop-blur-lg bg-white/10 flex items-center justify-center">
                    <TbPlayerTrackNextFilled size={14} />
                  </div>
                  <div className="h-10 w-10 rounded-full backdrop-blur-lg bg-white/10 flex items-center justify-center">
                    <TbPlayerTrackNextFilled size={14} />
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
          className={`p-2 grid grid-cols-1 gap-2 backdrop-blur-lg bg-white/10 rounded-full -ml-2.5 animated-div duration-300   ${
            openWindowState ? "open" : ""
          }`}
        >
          <div className="p-2 rounded-full backdrop-blur-lg bg-white/10 cursor-pointer">
            <IoChevronBackOutline onClick={handleWindowState} size={20} />
          </div>
          <div className="p-2 rounded-full backdrop-blur-lg bg-white/10 cursor-pointer">
            <IoChevronForwardOutline
              onClick={handleExtendWindowState}
              size={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

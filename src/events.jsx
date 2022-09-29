import React from "react";
import {
  CalendarDaysIcon,
  ChevronRightIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
const Events = () => {
  return (
    <div className="md:flex md:justify-center md:flex-col md:items-center">
      <div className=" lg:grid lg:grid-cols-2 lg:grid-rows-1 place-content-center place-items-center">
        <img
          src="/cake.png"
          className="w-full  lg:col-span-1 lg:col-start-2 md:w-[593px] row-span-1"
        />

        <div className="space-y-4 px-6 lg:col-span-1 lg:col-start-1 row-span-1">
          <h1 className="text-[28px] font-bold text-[#240D57]">
            Birthday Bash
          </h1>
          <p className="text-[14px] text-[#828282]">
            Hosted By <span className="font-bold">Elysia</span>
          </p>
          <div className="flex relative space-x-4 py-2">
            <div className=" w-[48px] h-[48px] bg-white drop-shadow rounded-[10px] flex items-center justify-center">
              <CalendarDaysIcon className="h-6 w-6 text-[#8456EC]" />
            </div>
            <div>
              <p className="text-[16px] text-[#240D57] font-bold">
                18 August 6:00PM
              </p>
              <p className="text-[14px] text-[#4F4F4F]">
                to <span className="font-bold">19 August 1:00PM</span> UTC +10
              </p>
            </div>
            <ChevronRightIcon className="w-5 h-full absolute bottom-1 right-5 text-[#BDBDBD]"></ChevronRightIcon>
          </div>
          <div className="flex relative  space-x-4 py-2">
            <div className=" w-[48px] h-[48px] bg-white drop-shadow rounded-[10px] flex items-center justify-center">
              <MapPinIcon className="h-6 w-6 text-[#8456EC]" />
            </div>
            <div>
              <p className="text-[16px] text-[#240D57] font-bold">
                Street name
              </p>
              <p className="text-[14px] text-[#4F4F4F]">
                Suburb, State, Postcode
              </p>
            </div>
            <ChevronRightIcon className="w-5 h-full absolute bottom-1 right-5 text-[#BDBDBD]"></ChevronRightIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;

import React from "react";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className=" grid place-content-center place-items-center grid-flow-row lg:grid-flow-col h-[100vh] space-y-10 lg:place-content-around  lg:grid-cols-2">
        <div className="   text-[36px] font-bold leading-none text-center lg:text-right w-full lg:place-content-end md:w-[500px] md:text-[64px] lg:col-span-1 lg:col-start-2">
          <span className=" text-[#240D57]">Imagine if</span>
          <p className=" text-transparent  bg-clip-text bg-gradient-to-r from-[#8456EC] to-[#E87BF8] ">
            Snapchat
          </p>
          <p className=" text-[#240D57] pb-4">had events.</p>
          <p className="text-[16px] font-light text-[#4F4F4F] md:text-[24px]">
            Easily host and share events with your friends across any social
            media
          </p>
          <button
            onClick={() => {
              navigate("/create");
            }}
            className="hidden lg:block w-[187px] h-[50px] rounded-[10px] text-[16px] md:w-[320px] md:h-[55px] bg-gradient-to-r from-[#8456EC] to-[#E87BF8] text-white md:text-[24px] mb-9 "
          >
            🎉 Create my event
          </button>
        </div>
        <img
          src="/card.png"
          className="w-[165.63px] md:w-[311px]  lg:col-span-1 lg:col-start-1"
        />

        <button
          onClick={() => {
            navigate("/create");
          }}
          className=" lg:hidden w-[187px] h-[50px] rounded-[10px] text-[16px] md:w-[320px] md:h-[55px] bg-gradient-to-r from-[#8456EC] to-[#E87BF8] text-white md:text-[24px] mb-9 "
        >
          🎉 Create my event
        </button>
      </div>
    </>
  );
};
export default Dashboard;

import React from "react";

const Create = () => {
  return (
    <>
      <div className="  mt-8 mx-auto container  flex justify-center items-center space-y-4">
        <div className=" h-full  w-full md:max-w-[800px] soace-y-4">
          <h1 className="text-[28px] font-bold text-[#240D57]">
            Create Your own Event
          </h1>
          <p className="text-[14px] md:text-[20px] text-[#828282] mb-4">
            Write details of the events in the below fields
          </p>
          <form className="md:max-w-[800px] space-y-2">
            <input
              id="event_name"
              name="event_name"
              placeholder="Event Name"
              type="text"
              autoComplete="event_name"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 md:rounded-3xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <input
              id="host_name"
              name="host_name"
              type="text"
              placeholder="Host name"
              autoComplete="host_name"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 md:rounded-3xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <input
              id="location"
              name="location"
              type="text"
              placeholder="location"
              autoComplete="location"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 md:rounded-3xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <input
              id="start_date"
              name="start_date"
              type="date"
              autoComplete="start_date"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 md:rounded-3xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <div className="w-full flex  justify-end">
              <button
                onClick={() => {
                  navigate("/event");
                }}
                className=" w-[120px] h-[40px] rounded-[10px] text-[16px] md:w-[320px] md:h-[55px] bg-gradient-to-r from-[#8456EC] to-[#E87BF8] text-white md:text-[24px] mb-9 "
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Create;

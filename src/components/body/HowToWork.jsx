import React from "react";

const Howtowork = () => {
  return (
    <div className="bg-green-700 py-6 px-16 mb-8">
      <div className="w-96 mx-auto">
        <div className="text-white text-center text-2xl font-bold">
          Comment ça marche
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="">
            <div className="bg-white h-2 w-full">&nbsp;</div>
            <span className="text-white uppercase text-[12px]">
              pour les vendeurs
            </span>
          </div>
          <div className="">
            <div className="bg-white h-2 w-full">&nbsp;</div>
            <span className="text-white uppercase text-[12px]">
              pour les acheteurs
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center">
        <div className="bg-white rounded-full w-48 h-48 object-center">
          <div className="flex justify-center items-center h-full"></div>
        </div>
        {/* <div className="flex flex-wrap">
          <div className="bg-white h-20 w-[10px]">
            <div className="bg-green-700 h-full mr-1 rounded-tr-full rounded-br-full "></div>
          </div>
          <div className="bg-white w-48 h-20 flex justify-center items-center"></div>
          <div></div>
        </div> */}
      </div>
    </div>
  );
};

export default Howtowork;

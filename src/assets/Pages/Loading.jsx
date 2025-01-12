import React, { useState } from "react";
import SunCloudyImage from "../Images/Sun cloud big rain.png";

const Loading = () => {
  return (
    <>
      <div className="loading-container w-full h-screen flex justify-center items-center">
        <div className="loading-content w-1/2 h-1/2 flex flex-col justify-center gap-3 items-center">
          <div className="loading-image w-52 h-1/2 flex justify-center items-center">
            <img
              src={SunCloudyImage}
              alt="suncloudyrainy"
              className="w-full h-48 shadow-lg shadow-slate-400"
            />
          </div>
          <div className="loading-text w-1/2 h-1/2 flex justify-center items-center flex-col">
          <h2 className="text-3xl font-bold text-slate-800 leading-9 tracking-wider uppercase">Weather</h2>
           <p className="text-xl font-semibold text-slate-800">Forecast</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
// shadow-[-17px_25px_34px_0px_rgba(155,166,179,0.26)]

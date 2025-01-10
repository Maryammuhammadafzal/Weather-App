import React, { useState } from 'react'
import { WiNightCloudy } from "react-icons/wi";

const Loading = () => {
     
     
     
  return (
    <div className="w-full h-screen bg-white">
  <div className="w-full h-screen flex justify-center bg-gradient-to-bl from-[#f2f4f7] to-[#bcc8d6]" />
  <div className="w-[200px] h-[147px] left-[74px] top-[203px] absolute">
    <div className="w-[88.14px] h-[88.37px] left-[87.29px] top-0 absolute bg-[#ffc100] rounded-full blur-[69.11px]" />
    <div className="w-[88.14px] h-[88.37px] left-[87.29px] top-0 absolute bg-gradient-to-b from-[#ffc100] to-[#ff8e00] rounded-full" />
    <img className="w-[200px] h-[129.16px] left-0 top-[17.84px] absolute shadow-[-17px_25px_34px_0px_rgba(155,166,179,0.20)]" src="https://via.placeholder.com/200x129" />
    <img className="w-[200px] h-[129.16px] left-0 top-[17.84px] absolute shadow-[inset_0px_4px_5px_0px_rgba(255,255,255,1.00)]" src="https://via.placeholder.com/200x129" />
  </div>
  <div className="w-[236px] left-[62px] top-[399px] absolute text-center">
    <span class="text-[#0a0a22] text-[40px] font-semibold font-['Poppins'] leading-[33px]">Weather</span>
    <br class="text-[#0a0a22] text-[32px] font-semibold font-['Poppins'] leading-[33px]"/> 
    <span class="text-[#8a94a1] text-2xl font-normal font-['Poppins'] leading-[33px]">Forecast</span></div>
</div>
  )
}

export default Loading
// shadow-[-17px_25px_34px_0px_rgba(155,166,179,0.26)]
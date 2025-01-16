import React , {useState} from "react";
import "./sliderCard.css"

import { FaArrowRight } from "react-icons/fa";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


function SliderCard(props) {
let {title , description , value , nextCard} = props;
 


  return (
    <>
        <div className="cardInner w-full h-full bg-transparent">
          <div className="cardContent w-full h-full flex gap-3  justify-between items-center ">
            <div className="cardImage w-1/2 h-72 flex p-3 justify-center items-center">
              <img src="" className="w-72 h-52" alt="image" />
            </div>
            <div
              className="CardInfo w-1/2 gap-2 h-full  bg-white flex justify-center flex-col items-center"
              style={{ borderRadius: "80% 0% 0% 80% / 48% 100% 0% 52%" }}
            >
              <div className="cardTitle text-2xl font-bold text-slate-800">
                {title}
              </div>
              <div className="cardDescription text-lg text-slate-600">
               {description}
              </div>
             <div label="Arbitrary content" className="w-20" id="progress_bar">
                <CircularProgressbarWithChildren value={value} >
                  <FaArrowRight
                  size={25}
                  onClick={() => {
                   nextCard()
                  }}
                />
                </CircularProgressbarWithChildren>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default SliderCard;

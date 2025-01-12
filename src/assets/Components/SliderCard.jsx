import React from "react";

function SliderCard() {
  return (
    <div>
      <div className="w-[100%] h-96 flex justify-center items-center rounded-xl border-white border shadow-slate-200 shadow-lg bg-gradient-to-bl from-slate-300 via-slate-200 to-whit" style={{width : "1000px" , height : "500px"}} >
        <div className="cardInner w-full h-full bg-transparent">
          <div className="cardContent w-full h-full flex gap-3  justify-between items-center ">
            <div className="cardImage w-1/2 h-72 flex p-3 justify-center items-center">
              <img src="" className="w-72 h-52" alt="image" />
            </div>
            <div className="CardInfo w-1/2 gap-2 h-full  bg-white flex justify-center flex-col items-center" style={{borderRadius: '80% 0% 0% 80% / 48% 100% 0% 52%'}}>
              <div className="cardTitle text-2xl font-bold text-slate-800">
                Card
              </div>
              <div className="cardDescription text-lg text-slate-600">
                This is a card
              </div>
              <div className="CardButton rounded-full w-[80px] h-[80px]  flex justify-center items-center">
                <div className="h-[50px] w-[50px] bg-blue-400 flex justify-center p-1 rounded-full">
                  <button className="w-full h-full cursor-pointer rounded-full hover:p-2 hover:bg-slate-50 bg-white"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderCard;

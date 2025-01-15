import React, { useState } from 'react'
import SliderCard from '../Components/SliderCard'


function Slider() {
  let [currentIndex , setcurrentIndex] = useState(0);
  let [animationDirection , setAnimationDirection] = useState("");
  let cardData = [{
    "id": 1,
    "title": "Card 1",
    "description": "First Card",
    "value" : 25
  }, {
    "id": 2,
    "title": "Card 2",
    "description": "Second Card",
    "value" : 50
  }, {
    "id": 3,
    "title": "Card 3",
    "description": "Third Card",
    "value" : 75
  }, {
    "id": 4,
    "title": "Card 4",
    "description": "Forth Card",
    "value" : 100
  }]
  const handleNextCard = (e)=> {
// e.preventDefault()
    if (currentIndex < cardData.length - 1) {
      setAnimationDirection('slide-left'); // Set animation direction
      setTimeout(() => setcurrentIndex(currentIndex + 1), 100); 
     
  }
}


console.log(currentIndex);

  return (
     <div className="w-[100%] h-full flex flex-col justify-center items-center overflow-hidden slider-container " >
      <div
        className={`slider-card ${animationDirection} w-[100%] h-96 flex justify-center items-center rounded-xl border-white border shadow-slate-200 shadow-lg bg-gradient-to-bl from-slate-300 via-slate-200 to-white`}
        style={{ width: "1000px", height: "500px"}}
      >
   <SliderCard
        key={cardData[currentIndex].id}
        title={cardData[currentIndex].title}
        description={cardData[currentIndex].description}
        value={cardData[currentIndex].value}
        nextCard={handleNextCard}
      />
      </div>
</div>
   
  )
}

export default Slider

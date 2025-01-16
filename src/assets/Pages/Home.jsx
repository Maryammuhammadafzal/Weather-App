import React from 'react'
import Slider from './Slider.jsx';
import WeatherIcon from "../Images/weather-logo.png"

console.log(Slider);


function Home() {
  
  return (
    <>
    <div className='w-full h-screen flex bg-white p-3'>
      <div className="row1 w-full h-14 flex justify-start p-2 items-center bg-slate-500">
        <div className="col1 w-fit h-full p-2">
          <p className='text-black text-sm uppercase font-extrabold'>Weather.Weather</p>
        </div>
        <div className="col2 w-fit h-full p-2">
          <img src={WeatherIcon} alt="" />
        <p className='text-gray-400 text-base'></p>
        </div>
      </div>
      <div className="row2">
        <div className="col1">
          <img src="" alt="" />
        </div>
        <div className="col2">
          <h1 className='text-black text-5xl'></h1>
          <h1 className='text-gray-400 text-5xl'></h1>
        </div>
        <div className="col3">
          <table> 
            <tr>
              <td className='text-xs text-gray-300 '></td>
              <td className='text-xs text-gray-300 '></td>
              <td className='text-xs text-gray-300 '></td>
              <td className='text-xs text-gray-300 '></td>
              <td className='text-xs text-gray-300 '></td>
              <td className='text-xs text-gray-300 '></td>
              <td className='text-xs text-gray-300 '></td>
            </tr>
            <tr>
              <td className='text-base text-black '></td>
              <td className='text-base text-black '></td>
              <td className='text-base text-black '></td>
              <td className='text-base text-black '></td>
              <td className='text-base text-black '></td>
              <td className='text-base text-black '></td>
              <td className='text-base text-black '></td>
            </tr>
          </table>
        </div>
      </div>
      <div className="row3">
      <div className="col1">
        <h3 className='text-sky-600 text-lg'></h3>
        <div className='innerCol'>
          <div className="row1">
            <p>
              <img src="" alt="" />
              <p className='text-sm text-black'></p>
            </p>
            <p className='text-xs text-gray-400'> 
              <p className='progressBar'></p>
            </p>
          </div>
          <div className="row2">
            <p>
              <img src="" alt="" />
              <p className='text-sm text-black'></p>
            </p>
            <p className='text-xs text-gray-400'> 
              <p className='progressBar'></p>
            </p>
          </div>
          <div className="row3">
            <p>
              <img src="" alt="" />
              <p className='text-sm text-black'></p>
            </p>
            <p className='text-xs text-gray-400'> 
              <p className='progressBar'></p>
            </p>
          </div>
          <div className="row4">
            <p>
              <img src="" alt="" />
              <p className='text-sm text-black'></p>
            </p>
            <p className='text-xs text-gray-400'> 
              <p className='progressBar'></p>
            </p>
          </div>
          <div className="row5">
            <p>
              <img src="" alt="" />
              <p className='text-sm text-black'></p>
            </p>
            <p className='text-xs text-gray-400'> 
              <p className='progressBar'></p>
            </p>
          </div>
        </div>
      </div>
        <div className="col2">
        <h3 className='text-sky-600 text-lg'></h3>
        <div className='innerCol'>
          <div className="row1">
            <p>
              <p></p>
              <p></p>
            </p>
          <p>
              <img src="" alt="" />
              <p className='text-sm text-black'></p>
            </p>
          </div>
          <div className="row2">
          <p>
              <p></p>
              <p></p>
            </p>
          <p>
              <img src="" alt="" />
              <p className='text-sm text-black'></p>
            </p>
            
          </div>
          <div className="row3">
          <p>
              <p></p>
              <p></p>
            </p>
          <p>
              <img src="" alt="" />
              <p className='text-sm text-black'></p>
            </p>     
          </div>
          
        </div>
        </div>
        <div className="col3">
        <h3 className='text-sky-600 text-lg'></h3>
        <div className='innerCol'>
          <div className="row1">
            <p>
              <p className='text-sm text-black'></p>
            </p>
            <p className='text-xs text-gray-400'> 
              <p className='progressBar'></p>
            </p>
          </div>
          <div className="row2">
            <p>
              <p className='text-sm text-black'></p>
            </p>
            <p className='text-xs text-gray-400'> 
              <p className='progressBar'></p>
            </p>
          </div>
          <div className="row3">
            <p>
              <p className='text-sm text-black'></p>
            </p>
            <p className='text-xs text-gray-400'> 
              <p className='progressBar'></p>
            </p>
          </div>
          <p></p>
        </div>
        </div>
      </div>
      <div className="row4">
      <div className="col1"></div>
        <div className="col2"></div>
      </div>
    </div>
    </>
  )
}

export default Home

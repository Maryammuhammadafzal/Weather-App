

import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

import WeatherWebIcon from "../Images/weather-logo.png";
import Weather_Charts from "../Components/Weather_Charts";

function Home() {
  const userCityRef = useRef("");
  const [forecast, setForecast] = useState([]);
  const [WeatherIcon , setWeatherIcon] = useState([]);
  const [cityName, setCityName] = useState("London"); // Default city
  const [error, setError] = useState(null);

// Get weather icons 
const getWeatherIcon = async (city) => {


  let APIkey = "39311301e10d680d24c0d03fcd69c1e8";
  try {
    let response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`
    );
    setWeatherIcon([response.data]);
    
  } catch (e) {
    console.log(e);
  }
};


  const daysName = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const getWeeklyForecast = async (city) => {
    getWeatherIcon(cityName)
    try {
      setError(null); // Clear any previous errors

      // Use Open-Meteo API to get geolocation data (latitude and longitude)
      const geoResponse = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en`
      );

    let latitude = geoResponse?.data?.results[0]?.latitude;
    let longitude = geoResponse?.data?.results[0]?.longitude;

      if (!geoResponse?.data?.results?.length) {
        throw new Error("City not found");
      }

      // Fetch weather data from Open-Meteo API
      const weatherResponse = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto`
      );
    
      setForecast(weatherResponse?.data); // Update forecast
    } catch (err) {
      setError(err.message || "Failed to fetch weather data");
      console.log(err.message);
      
    }
  };

  let forecastArray = [];
  forecastArray.push(forecast)

  useEffect(() => {
  console.log(forecastArray[0])
    
  }, [forecast]);
  useEffect(() => {
    getWeeklyForecast(cityName); // Fetch weather for the default city on mount
  }, []);
  useEffect(() => {
    getWeatherIcon(cityName); // Fetch weather for the default city on mount
    console.log(WeatherIcon);
    
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const userCity = userCityRef?.current?.value.toLowerCase();
    if (userCity) {
      setCityName(userCity);
      getWeeklyForecast(userCity);
      getWeatherIcon(userCity);

      let userCity2 = document.getElementById('userCity')
      userCity2.value = ''
    } else {
      setError("Please enter a valid city name");
    }
  };
  let weatherIcon;
  let weatherType;
  WeatherIcon.map((icon)=> {
   weatherIcon = icon.weather[0].icon;
   weatherType = icon.weather[0].main;
    console.log(icon);
  })

  
  
  return (
    <div className="w-full h-screen flex bg-white p-3 font-mono flex-col">
      {/* Header */}
      <div className="row1 w-full h-14 flex justify-start p-2 items-center">
        <div className="col1 w-fit h-full p-2 items-center flex">
          <p className="text-black text-sm uppercase font-extrabold">
            Weather Web
          </p>
        </div>
        <div className="col2 w-fit h-full p-2 flex items-center gap-3 mx-3">
          <img src={WeatherWebIcon} className="w-8 h-8" alt="logo" />
          <p className="text-gray-500 font-semibold w-18 h-4 text-sm">
            {cityName}
          </p>
        </div>
        <form
          className="col3 w-96 h-full p-2 flex items-center gap-3 mx-3"
          onSubmit={handleSearch}
        >
          <input
                type="text"
                id="userCity"
                ref={userCityRef}
                className="w-72 rounded-lg h-8 bg-neutral-200 pl-2"
                placeholder="Enter City Name"
              />
        <button
                id="searchBtn"
                onClick={getWeeklyForecast}
                className="bg-sky-600 rounded-lg py-1 px-3 text-white"
              >
                Search
              </button>
        </form>
      </div>

      {/* Error Handling
      {error && (
        <div className="text-red-500 font-semibold text-center mt-4">
          {error}
        </div>
      )} */}

      {/* Weather Forecast */}
      {forecast ? (
        <div className="row2 w-full h-fit flex justify-center items-center gap-3 mx-2 flex-col" key={cityName}>
          {forecastArray.map((day, index) => (
            <>

            <div className="flex w-full h-20">

            <div key={index} className="col1 w-72 h-20 items-center flex justify-center p-3 ">
              
              {console.log(weatherIcon)}
              <img src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="icon" className="w-40 h-24 " />
            <div className="col2 w-52 h-20 flex items-center gap-2 ">
              <h1 className="text-black text-5xl font-bold">
                {weatherType == "Clouds" ? "Cloudy" : weatherType}
              </h1>
              <h1 className="text-gray-400 text-4xl font-bold">{day?.daily?.temperature_2m_max[0]}<span className="text-3xl">{day?.daily_units?.temperature_2m_max}</span> </h1>
            </div>
            </div>
            <div className="col3 w-80 h-20">
              {/* <MyCalendar /> */}
              <table>
          <tbody>
            <tr>
              <td className="text-xs text-gray-300 "></td>
              <td className="text-xs text-gray-300 "></td>
              <td className="text-xs text-gray-300 "></td>
              <td className="text-xs text-gray-300 "></td>
              <td className="text-xs text-gray-300 "></td>
              <td className="text-xs text-gray-300 "></td>
              <td className="text-xs text-gray-300 "></td>
            </tr>
            <tr>
              <td className="text-base text-black "></td>
              <td className="text-base text-black "></td>
              <td className="text-base text-black "></td>
              <td className="text-base text-black "></td>
              <td className="text-base text-black "></td>
              <td className="text-base text-black "></td>
              <td className="text-base text-black "></td>
            </tr>
          </tbody>
        </table>
            </div>
            </div>
         
          <div className="row3 w-full h-64 flex justify-center items-center gap-3 mx-2">
            <div className="col1 w-[30%] h-[15rem] border border-neutral-200 p-3 bg-neutral-200 rounded-[30px] shadow-md shadow-sky-100">
              <h3 className="text-sky-600 text-lg h-4"> Forecast</h3>
              <div className="innerCol w-full p-2 flex justify-start flex-col h-[14rem]">
                <div className="row1 w-full items-center justify-between h-1/5 flex border-b border-b-neutral-700">
                  <p className="flex w-1/3 h-fit justify-start items-center">
                    <img src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="today_icon" className="w-6 h-6" />
                    <span className="text-sm text-black">Tommorrow</span>
                  </p>
                  <p className="text-xs w-2/3 h-10 gap-3 items-center justify-center flex text-gray-400">
                  {day?.daily?.temperature_2m_min[1]}  
                   <span className="w-52 h-[5px] rounded-3xl flex items-center justify-center bg-neutral-300"></span>
                   {day?.daily?.temperature_2m_max[1]}
                  </p>
                </div>
                <div className="row2 w-full items-center justify-between h-1/5 flex border-b border-b-neutral-700">
                  <p className="flex w-1/3 h-fit justify-start items-center">
                    <img src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="today_icon" className="w-6 h-6" />
                    <span className="text-sm text-black">Tommorrow</span>
                  </p>
                  <p className="text-xs w-2/3 h-10 gap-3 items-center justify-center flex text-gray-400">
                  {day?.daily?.temperature_2m_min[2]}  
                   <span className="w-52 h-[5px] rounded-3xl flex items-center justify-center bg-neutral-300"></span>
                   {day?.daily?.temperature_2m_max[2]}
                  </p>
                </div>
                <div className="row3 w-full items-center justify-between h-1/5 flex border-b border-b-neutral-700">
                  <p className="flex w-1/3 h-fit justify-start items-center">
                    <img src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="today_icon" className="w-6 h-6" />
                    <span className="text-sm text-black">Tommorrow</span>
                  </p>
                  <p className="text-xs w-2/3 h-10 gap-3 items-center justify-center flex text-gray-400">
                  {day?.daily?.temperature_2m_min[3]}  
                   <span className="w-52 h-[5px] rounded-3xl flex items-center justify-center bg-neutral-300"></span>
                   {day?.daily?.temperature_2m_max[3]}
                  </p>
                </div>
                <div className="row4 w-full items-center justify-between h-1/5 flex border-b border-b-neutral-700">
                  <p className="flex w-1/3 h-fit justify-start items-center">
                    <img src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="today_icon" className="w-6 h-6" />
                    <span className="text-sm text-black">Tommorrow</span>
                  </p>
                  <p className="text-xs w-2/3 h-10 gap-3 items-center justify-center flex text-gray-400">
                  {day?.daily?.temperature_2m_min[4]}  
                   <span className="w-52 h-[5px] rounded-3xl flex items-center justify-center bg-neutral-300"></span>
                   {day?.daily?.temperature_2m_max[4]}
                  </p>
                </div>
                <div className="row5 w-full items-center justify-between h-1/5 flex">
                  <p className="flex w-1/3 h-fit justify-start items-center">
                    <img src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="today_icon" className="w-6 h-6" />
                    <span className="text-sm text-black">Tommorrow</span>
                  </p>
                  <p className="text-xs w-2/3 h-10 gap-3 items-center justify-center flex text-gray-400">
                  {day?.daily?.temperature_2m_min[5]}  
                   <span className="w-52 h-[5px] rounded-3xl flex items-center justify-center bg-neutral-300">
                    <p className={`w-${Math.round((day?.daily?.temperature_2m_max[5] + day?.daily?.temperature_2m_min[5])/2)}rem h-full rounded-3xl bg-black`}></p>
                   </span>
                   {day?.daily?.temperature_2m_max[5]}
                  </p>
                </div>
              </div>
            </div>
            <div className="col2 w-[30%] h-[15rem] border border-neutral-200 p-3 bg-neutral-200 rounded-[30px] shadow-md shadow-sky-100">
              <h3 className="text-sky-600 text-lg h-4">Precipitation Total</h3>
              <div className="innerCol w-full p-2 h-[14rem]">
                <div className="row1 h-1/3 w-full border-b border-b-neutral-400 flex flex-col pt-2">
                  <p className="flex w-full  justify-between h-5">
                    <p className="text-xs text-neutral-400 tracking-tighter leading-tighter uppercase">Last 24 hours</p>
                    <p className="text-xs text-sky-600 tracking-tighter leading-tighter" >{Math.max(...(day?.hourly?.precipitation || []))} mm</p>
                  </p>
                  <p className="flex w-36 gap-x-2 items-center justify-start h-10">
                    <img className="w-10" src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="icon" />
                    <span className="w-20 text-sm text-black">{Math.max(...(day?.hourly?.temperature_2m || []))} °C</span>
                  </p>
                </div>
                <div className="row2 h-1/3 w-full border-b border-b-neutral-400 flex flex-col pt-2">
                  <p className="flex w-full  justify-between h-5">
                    <p className="text-xs text-neutral-400 tracking-tighter leading-tighter uppercase">next 24 hours</p>
                    <p className="text-xs text-sky-600 tracking-tighter leading-tighter" >{Math.max(...(day?.hourly?.precipitation || []))} mm</p>
                  </p>
                  <p className="flex w-36 gap-x-2 items-center justify-start h-10">
                    <img className="w-10" src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="icon" />
                    <span className="w-20 text-sm text-black">{Math.max(...(day?.hourly?.temperature_2m || []))} °C</span>
                  </p>
                </div>
                <div className="row3 h-1/3 w-full flex flex-col pt-2">
                  <p className="flex w-full  justify-between h-5">
                    <p className="text-xs text-neutral-400 tracking-tighter leading-tighter uppercase">Last week</p>
                    <p className="text-xs text-sky-600 tracking-tighter leading-tighter" >{Math.max(...(day?.hourly?.precipitation || []))} mm</p>
                  </p>
                  <p className="flex w-36 gap-x-2 items-center justify-start h-10">
                    <img className="w-10" src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="icon" />
                    <span className="w-20 text-sm text-black">{Math.max(...(day?.hourly?.temperature_2m || []))} °C</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col3 w-[30%] h-[15rem] border border-neutral-200 p-3 bg-neutral-200 rounded-[30px] shadow-md shadow-sky-100">
              <h3 className="text-sky-600 text-lg">Comparision By day</h3>
              <div className="innerCol  w-full px-2 h-[13rem]">
                <div className="row1 w-full items-center justify-between h-1/4 flex border-b border-b-neutral-700">
                  <p>
                    <span className="text-sm text-black">Today</span>
                  </p>
                  <p class="text-xs w-2/3 h-5 gap-3 items-center justify-center flex text-gray-400">{day?.daily?.temperature_2m_min[0]}<span class="w-52 h-[5px] rounded-3xl flex items-center justify-center bg-neutral-300"></span>{day?.daily?.temperature_2m_max[0]}</p>
                </div>
                <div className="row1 w-full items-center justify-between h-1/4 flex border-b border-b-neutral-700">
                  <p>
                    <span className="text-sm text-black">Yesterday</span>
                  </p>
                  <p class="text-xs w-2/3 h-5 gap-3 items-center justify-center flex text-gray-400">{day?.daily?.temperature_2m_min[6]}<span class="w-52 h-[5px] rounded-3xl flex items-center justify-center bg-neutral-300"></span>{day?.daily?.temperature_2m_max[6]}</p>
                </div>
                <div className="row1 w-full items-center justify-between h-1/4 flex">
                  <p>
                    <span className="text-sm text-black">Tommorrow</span>
                  </p>
                  <p class="text-xs w-2/3 h-5 gap-3 items-center justify-center flex text-gray-400">{day?.daily?.temperature_2m_min[2]}<span class="w-52 h-[5px] rounded-3xl flex items-center justify-center bg-neutral-300"></span>{day?.daily?.temperature_2m_max[2]}</p>
                </div>
                <p className="w-full h-1/4 text-sm text-neutral-500 px-2" >{day?.daily?.temperature_2m_min[0] < day?.daily?.temperature_2m_min[6] ? "The maximum temperature is lower today than yesterday." : "The maximum temperature is higher today than yesterday."}</p>
              </div>
            </div>
          </div>
          <Weather_Charts latitude={day?.latitude} longitude={day?.longitude}/>
            </>
         
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-10">Loading...</div>
      )}
    </div>
  );
}

export default Home;
// Max: {day.temperature_2m_max}°C | Min: {day.temperature_2m_min}°C
// {daysName[new Date(day.date).getDay()]}
// {/* {day.weather[0].main} */}
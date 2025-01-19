
// import React, { useRef, useState, useEffect } from "react";
// import axios from "axios";
// import MyCalendar from "../Components/MyCalendar.jsx";

// import Slider from "./Slider.jsx";
// import WeatherIcon from "../Images/weather-logo.png";

// function Home() {
//   let userCityRef = useRef("");
//   const [forecast, setForecast] = useState([]);
//   const apiKey = "39311301e10d680d24c0d03fcd69c1e8";
// let daysName = ['Mon' , 'Tue' , 'Wed' , 'Thu' , 'Fri' , 'Sat' , 'Sun'];
// if (navigator.London) {
//   navigator.London.getCurrentPosition(
//     (position) => {
//       const latitude = position.coords.latitude;
//       const longitude = position.coords.longitude;
//       console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
//       // alert(`Your location: Latitude ${latitude}, Longitude ${longitude}`);
//     },
//     (error) => {
//       console.error("Error getting location:", error);
//       // alert("Unable to retrieve your location. Please allow location access.");
//     }
//   );
// } else {
//   // alert("Geolocation is not supported by your browser.");
//   console.log("Geolocation is not supported by your browser.");
// }


//   const getWeeklyForecast = async () => {
//     const cityName = "London"; // Default city
//     try {
//       const response = await axios.get(
//         `https://api.open-meteo.com/v1/forecast?q=${cityName}&hourly=temperature_2m,precipitation&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto`
//         // `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`
//       );

//       // Filter data to get one forecast per day (e.g., at 12:00:00)
//       const dailyForecast = response.data.list.filter((item) =>
//         item.dt_txt.includes("12:00:00")
//       );
//       setForecast(dailyForecast); // Update state with daily forecast
//       console.log(dailyForecast); // Debugging
//     } catch (error) {
//       console.error("Error fetching weather data:", error);
//     }
//   };

//   useEffect(() => {
//     getWeeklyForecast(); // Fetch forecast on component mount
//   },[]);
  
  
//   return (
//     <>
//       {forecast.map((day, index) => (
//         <div
//           key={index}
//           className="w-full h-screen flex bg-white p-3 font-mono flex-col"
//         >
//           <div className="row1 w-full h-14 flex justify-start p-2 items-center">
//             <div className="col1 w-fit h-full p-2 items-center flex">
//               <p className="text-black text-sm uppercase font-extrabold">
//                 Weather.Weather
//               </p>
//             </div>
//             <div className="col2 w-fit h-full p-2 flex items-center gap-3 mx-3">
//               <img src={WeatherIcon} className="w-8 h-8" alt="logo" />
//               <p className="text-gray-500 font-semibold w-18 h-4 text-sm">
//                 London
//               </p>
//             </div>
//             <form className="col3 w-96 h-full p-2 flex items-center gap-3 mx-3">
//               <input
//                 type="text"
//                 id="userCity"
//                 ref={userCityRef}
//                 className="w-72 rounded-lg h-8 bg-neutral-200 pl-2"
//                 placeholder="Enter City Name"
//               />
//               <button
//                 id="searchBtn"
//                 onClick={getWeeklyForecast}
//                 className="bg-sky-600 rounded-lg py-1 px-3 text-white"
//               >
//                 Search
//               </button>
//             </form>
//           </div>
//           <div className="row2 w-full h-32 bg-slate-500 flex items-center justify-between">
//             <div className="col1 w-96 h-32 items-center flex justify-center"> 
//               <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="icon" className="w-40 h-full" />
//             <div className="col2 w-52 h-32 flex items-center gap-2 ">
//               <h1 className="text-black text-5xl font-bold">
//               {day.weather[0].main == "Clouds" ? "Cloudy" : day.weather[0].main}
//               </h1>
//               <h1 className="text-gray-400 text-4xl font-bold">{Math.round(day.main.temp)}<span className="text-3xl">°C</span> </h1>
//             </div>
//             </div>
//             <div className="col3 w-80 h-32">
//               {/* <MyCalendar /> */}
//               <table>
//           <tbody>
//             <tr>
//               <td className="text-xs text-gray-300 "></td>
//               <td className="text-xs text-gray-300 "></td>
//               <td className="text-xs text-gray-300 "></td>
//               <td className="text-xs text-gray-300 "></td>
//               <td className="text-xs text-gray-300 "></td>
//               <td className="text-xs text-gray-300 "></td>
//               <td className="text-xs text-gray-300 "></td>
//             </tr>
//             <tr>
//               <td className="text-base text-black "></td>
//               <td className="text-base text-black "></td>
//               <td className="text-base text-black "></td>
//               <td className="text-base text-black "></td>
//               <td className="text-base text-black "></td>
//               <td className="text-base text-black "></td>
//               <td className="text-base text-black "></td>
//             </tr>
//           </tbody>
//         </table>
//             </div>
//           </div>
//           <div className="row3 w-full h-80 flex justify-center items-center gap-3 mx-2">
//             <div className="col1 w-1/3 h-[19rem] border border-neutral-700 p-2">
//               <h3 className="text-sky-600 text-lg"> Forecast</h3>
//               <div className="innerCol w-full p-2 h-[17rem]">
//                 <div className="row1 w-full h-1/5 flex">
//                   <p className="flex w-10 h-fit justify-center items-center">
//                     <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="today_icon" className="w-10 h-10" />
//                     <span className="text-sm text-black">{day.dt_txt.includes("12:00:00") ? "Today" : day.dt_text}</span>
//                   </p>
//                   <p className="text-xs text-gray-400">
//                     <p className="progressBar"></p>
//                   </p>
//                 </div>
//                 <div className="row2">
//                   <p>
//                     <img src="" alt="" />
//                     <p className="text-sm text-black"></p>
//                   </p>
//                   <p className="text-xs text-gray-400">
//                     <p className="progressBar"></p>
//                   </p>
//                 </div>
//                 <div className="row3">
//                   <p>
//                     <img src="" alt="" />
//                     <p className="text-sm text-black"></p>
//                   </p>
//                   <p className="text-xs text-gray-400">
//                     <p className="progressBar"></p>
//                   </p>
//                 </div>
//                 <div className="row4">
//                   <p>
//                     <img src="" alt="" />
//                     <p className="text-sm text-black"></p>
//                   </p>
//                   <p className="text-xs text-gray-400">
//                     <p className="progressBar"></p>
//                   </p>
//                 </div>
//                 <div className="row5">
//                   <p>
//                     <img src="" alt="" />
//                     <p className="text-sm text-black"></p>
//                   </p>
//                   <p className="text-xs text-gray-400">
//                     <p className="progressBar"></p>
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="col2 w-1/3 border h-[19rem] border-neutral-700 p-2">
//               <h3 className="text-sky-600 text-lg"></h3>
//               <div className="innerCol">
//                 <div className="row1">
//                   <p>
//                     <p></p>
//                     <p></p>
//                   </p>
//                   <p>
//                     <img src="" alt="" />
//                     <p className="text-sm text-black"></p>
//                   </p>
//                 </div>
//                 <div className="row2">
//                   <p>
//                     <p></p>
//                     <p></p>
//                   </p>
//                   <p>
//                     <img src="" alt="" />
//                     <p className="text-sm text-black"></p>
//                   </p>
//                 </div>
//                 <div className="row3">
//                   <p>
//                     <p></p>
//                     <p></p>
//                   </p>
//                   <p>
//                     <img src="" alt="" />
//                     <p className="text-sm text-black"></p>
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="col3 w-1/3 border border-neutral-700 h-[19rem] p-2">
//               <h3 className="text-sky-600 text-lg"></h3>
//               <div className="innerCol">
//                 <div className="row1">
//                   <p>
//                     <p className="text-sm text-black"></p>
//                   </p>
//                   <p className="text-xs text-gray-400">
//                     <p className="progressBar"></p>
//                   </p>
//                 </div>
//                 <div className="row2">
//                   <p>
//                     <p className="text-sm text-black"></p>
//                   </p>
//                   <p className="text-xs text-gray-400">
//                     <p className="progressBar"></p>
//                   </p>
//                 </div>
//                 <div className="row3">
//                   <p>
//                     <p className="text-sm text-black"></p>
//                   </p>
//                   <p className="text-xs text-gray-400">
//                     <p className="progressBar"></p>
//                   </p>
//                 </div>
//                 <p></p>
//               </div>
//             </div>
//           </div>
//           <div className="row4">
//             <div className="col1"></div>
//             <div className="col2"></div>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }

// export default Home;

import React, { useRef, useState, useEffect } from "react";
import axios from "axios";

import WeatherWebIcon from "../Images/weather-logo.png";

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
    const userCity = userCityRef?.current?.value;
    if (userCity) {
      setCityName(userCity);
      getWeeklyForecast(userCity);
    } else {
      setError("Please enter a valid city name");
    }
  };
  let weatherIcon;
  let weatherType;
  WeatherIcon.map((icon , index)=> {
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
            Weather App
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

      {/* Error Handling */}
      {error && (
        <div className="text-red-500 font-semibold text-center mt-4">
          {error}
        </div>
      )}

      {/* Weather Forecast */}
      {forecast ? (
        <div className="row2 w-full h-[32rem] flex justify-center items-center gap-3 mx-2 flex-col" key={cityName}>
          {forecastArray.map((day, index) => (
            <>

            <div className="flex w-full h-44 items-center">

            <div key={index} className="col1 w-72 h-32 items-center flex justify-center p-3">
              
              {console.log(weatherIcon)}
              <img src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="icon" className="w-40 h-full" />
            <div className="col2 w-52 h-32 flex items-center gap-2 ">
              <h1 className="text-black text-5xl font-bold">
                {weatherType == "Clouds" ? "Cloudy" : weatherType}
              </h1>
              <h1 className="text-gray-400 text-4xl font-bold">{day?.daily?.temperature_2m_max[0]}<span className="text-3xl">{day?.daily_units?.temperature_2m_max}</span> </h1>
            </div>
            </div>
            <div className="col3 w-80 h-32">
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
         
          <div className="row3 w-full h-80 flex justify-center items-center gap-3 mx-2">
            <div className="col1 w-1/3 h-[19rem] border border-neutral-700 p-2">
              <h3 className="text-sky-600 text-lg"> Forecast</h3>
              <div className="innerCol w-full p-2 h-[17rem]">
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
            <div className="col2 w-1/3 border h-[19rem] border-neutral-700 p-2">
              <h3 className="text-sky-600 text-lg">Precipitation Total</h3>
              <div className="innerCol w-full p-2 h-[17rem]">
                <div className="row1 h-1/3 w-full border-b border-b-neutral-400 flex flex-col pt-2">
                  <p className="flex w-full  justify-between h-5">
                    <p className="text-xs text-neutral-400 tracking-tighter leading-tighter uppercase">Last 24 hours</p>
                    <p className="text-xs text-sky-600 tracking-tighter leading-tighter" >{Math.max(...(day?.hourly?.precipitation || []))} mm</p>
                  </p>
                  <p className="flex w-36 gap-3 items-center justify-start h-10">
                    <img className="w-10" src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="icon" />
                    <span className="w-20 text-sm text-black">{Math.max(...(day?.hourly?.temperature_2m || []))} °C</span>
                  </p>
                </div>
                <div className="row2 h-1/3 w-full border-b border-b-neutral-400 flex flex-col pt-2">
                  <p className="flex w-full  justify-between h-5">
                    <p className="text-xs text-neutral-400 tracking-tighter leading-tighter uppercase">next 24 hours</p>
                    <p className="text-xs text-sky-600 tracking-tighter leading-tighter" >{Math.max(...(day?.hourly?.precipitation || []))} mm</p>
                  </p>
                  <p className="flex w-36 gap-3 items-center justify-start h-10">
                    <img className="w-10" src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="icon" />
                    <span className="w-20 text-sm text-black">{Math.max(...(day?.hourly?.temperature_2m || []))} °C</span>
                  </p>
                </div>
                <div className="row3 h-1/3 w-full flex flex-col pt-2">
                  <p className="flex w-full  justify-between h-5">
                    <p className="text-xs text-neutral-400 tracking-tighter leading-tighter uppercase">Last week</p>
                    <p className="text-xs text-sky-600 tracking-tighter leading-tighter" >{Math.max(...(day?.hourly?.precipitation || []))} mm</p>
                  </p>
                  <p className="flex w-36 gap-3 items-center justify-start h-10">
                    <img className="w-10" src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="icon" />
                    <span className="w-20 text-sm text-black">{Math.max(...(day?.hourly?.temperature_2m || []))} °C</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col3 w-1/3 border border-neutral-700 h-[19rem] p-2">
              <h3 className="text-sky-600 text-lg">Comparision By day</h3>
              <div className="innerCol  w-full p-2 h-[17rem]">
                <div className="row1 w-full items-center justify-between h-1/4 flex border-b border-b-neutral-700">
                  <p>
                    <span className="text-sm text-black">Today</span>
                  </p>
                  <p class="text-xs w-2/3 h-10 gap-3 items-center justify-center flex text-gray-400">{day?.daily?.temperature_2m_min[0]}<span class="w-52 h-[5px] rounded-3xl flex items-center justify-center bg-neutral-300"></span>{day?.daily?.temperature_2m_max[0]}</p>
                </div>
                <div className="row1 w-full items-center justify-between h-1/4 flex border-b border-b-neutral-700">
                  <p>
                    <span className="text-sm text-black">Yesterday</span>
                  </p>
                  <p class="text-xs w-2/3 h-10 gap-3 items-center justify-center flex text-gray-400">{day?.daily?.temperature_2m_min[6]}<span class="w-52 h-[5px] rounded-3xl flex items-center justify-center bg-neutral-300"></span>{day?.daily?.temperature_2m_max[6]}</p>
                </div>
                <div className="row1 w-full items-center justify-between h-1/4 flex">
                  <p>
                    <span className="text-sm text-black">Tommorrow</span>
                  </p>
                  <p class="text-xs w-2/3 h-10 gap-3 items-center justify-center flex text-gray-400">{day?.daily?.temperature_2m_min[2]}<span class="w-52 h-[5px] rounded-3xl flex items-center justify-center bg-neutral-300"></span>{day?.daily?.temperature_2m_max[2]}</p>
                </div>
                <p className="w-full h-1/4 text-neutral-500 px-2" >{day?.daily?.temperature_2m_min[0] < day?.daily?.temperature_2m_min[6] ? "The maximum temperature is lower today than yesterday" : "The maximum temperature is higher today than yesterday"}</p>
              </div>
            </div>
          </div>
          <div className="row4 h-80 w-full">
            <div className="col1"></div>
            <div className="col2"></div>
          </div>
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
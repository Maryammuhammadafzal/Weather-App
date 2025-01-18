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
import WeatherIcon from "../Images/weather-logo.png";

function Home() {
  const userCityRef = useRef("");
  const [forecast, setForecast] = useState([]);
  const [cityName, setCityName] = useState("London"); // Default city
  const [error, setError] = useState(null);

  const daysName = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const getWeeklyForecast = async (city) => {
    try {
      setError(null); // Clear any previous errors

      // Use Open-Meteo API to get geolocation data (latitude and longitude)
      const geoResponse = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en`
      );
console.log(geoResponse?.data?.results[0]?.name);

      if (!geoResponse?.data?.results?.length) {
        throw new Error("City not found");
      }

      const { latitude, longitude , name , country } = geoResponse?.data?.results[0]; // Get latitude and longitude

      // Fetch weather data from Open-Meteo API
      const weatherResponse = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto`
      );
    console.log(weatherResponse?.data.daily);
    
      setForecast(weatherResponse.data.daily); // Update forecast
    } catch (err) {
      setError(err.message || "Failed to fetch weather data");
    }
  };

  useEffect(() => {
    getWeeklyForecast(cityName); // Fetch weather for the default city on mount
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const userCity = userCityRef.current.value.trim();
    if (userCity) {
      setCityName(userCity);
      getWeeklyForecast(userCity);
    } else {
      setError("Please enter a valid city name");
    }
  };

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
          <img src={WeatherIcon} className="w-8 h-8" alt="logo" />
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
      {forecast.length > 0 ? (
        <div className="row2 w-full h-80 flex justify-center items-center gap-3 mx-2">
          {forecast.map((day, index) => (
            <div
              key={index}
              className="col1 w-1/3 h-[19rem] border border-neutral-700 p-2"
            >
              <h3 className="text-sky-600 text-lg">
                {daysName[new Date(day.date).getDay()]}
              </h3>
              <div className="innerCol w-full p-2 h-[17rem]">
                <div className="flex justify-center">
                  <img
                    src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                    alt="Weather Icon"
                    className="w-20 h-20"
                  />
                </div>
                <h1 className="text-black text-2xl font-bold text-center">
                  {day.weather[0].main}
                </h1>
                <h2 className="text-gray-500 text-center">
                  Max: {day.temperature_2m_max}°C | Min: {day.temperature_2m_min}
                  °C
                </h2>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-10">Loading...</div>
      )}
    </div>
  );
}

export default Home;

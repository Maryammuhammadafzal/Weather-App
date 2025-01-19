

import React, { useRef, useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Weather_Charts = ({ latitude, longitude }) => {
        const [dailyData, setDailyData] = useState(null);
        const [hourlyData, setHourlyData] = useState(null);
      
        useEffect(() => {
          const fetchWeatherData = async () => {
            try {
              const response = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto`
              );
              const data = await response.json();
              setDailyData(data.daily);
              setHourlyData(data.hourly);
            } catch (error) {
              console.error("Error fetching weather data:", error);
            }
          };
      
          fetchWeatherData();
        }, [latitude, longitude]);
      
        if (!dailyData || !hourlyData) {
          return <p>Loading...</p>;
        }
      
        // Prepare data for charts
        const dailyLabels = dailyData.time;
        const temperatureMax = dailyData.temperature_2m_max;
        const temperatureMin = dailyData.temperature_2m_min;
        const precipitationDaily = dailyData.precipitation_sum;
      
        const hourlyLabels = hourlyData.time.slice(0, 24); // First 24 hours
        const hourlyTemperature = hourlyData.temperature_2m.slice(0, 24);
        const hourlyPrecipitation = hourlyData.precipitation.slice(0, 24);
      
        return (
          <div className="weather-dashboard h-15rem w-full justify-center flex gap-3">
            {/* Temperature Chart */}
            <div className="col1 w-[40%] border border-neutral-200 p-3 bg-neutral-200 rounded-[30px] shadow-md shadow-sky-100">
              <h3>Temperatures Today</h3>
              <p>
                ↓ {Math.min(...temperatureMin)}° ↑ {Math.max(...temperatureMax)}°
              </p>
              <Line
                data={{
                  labels: hourlyLabels.map((label) =>
                    new Date(label).toLocaleTimeString([], { hour: "2-digit" })
                  ),
                  datasets: [
                    {
                      label: "Temperature (°C)",
                      data: hourlyTemperature,
                      borderColor: "#6ca0dc",
                      backgroundColor: "rgba(108, 160, 220, 0.5)",
                      fill: true,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  scales: {
                    y: {
                      beginAtZero: true,
                    },
                  },
                }}
              />
            </div>
      
            {/* Precipitation Chart */}
            <div className="col1 w-[40%]  border border-neutral-200 p-3 bg-neutral-200 rounded-[30px] shadow-md shadow-sky-100">
              <h3>Precipitation Today</h3>
              <p>
                ↓ {Math.min(...hourlyPrecipitation)}% ↑ {Math.max(...hourlyPrecipitation)}%
              </p>
              <Line
                data={{
                  labels: hourlyLabels.map((label) =>
                    new Date(label).toLocaleTimeString([], { hour: "2-digit" })
                  ),
                  datasets: [
                    {
                      label: "Precipitation (%)",
                      data: hourlyPrecipitation,
                      borderColor: "#6ca0dc",
                      backgroundColor: "rgba(204, 231, 255, 0.5)",
                      fill: true,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  scales: {
                    y: {
                      beginAtZero: true,
                    },
                  },
                }}
              />
            </div>
          </div>
        );
      };
      
      export default Weather_Charts;
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSunRain } from "@fortawesome/free-solid-svg-icons";

const element = (
  <FontAwesomeIcon icon={faCloudSunRain} style={{ color: "black" }} />
);

export default function ShowWeather({ weatherData }) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();
  const date = d.getDate() + "  " + monthNames[d.getMonth()];

  console.log(weatherData, "print");
  return (
    <div>
      {typeof weatherData.main != "undefined" ? (
        <div>
          <article className="widget">
            <div className="weatherIcon">{element}</div>
            <div className="weatherInfo">
              <div className="temperature">
                <span>{Math.round(weatherData.main.temp)}&deg;</span>
              </div>
              <div className="description">
                <div className="weatherCondition">
                  {weatherData.weather[0].main}
                </div>
                <div className="place">
                  {weatherData.name} ,
                  {weatherData.sys.country === "IN"
                    ? "India"
                    : weatherData.sys.country}
                </div>
              </div>
            </div>
            <div className="date">{date}</div>
          </article>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

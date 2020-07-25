import React, { useState, useEffect } from "react";
import Search from "./Search";
import ShowWeather from "./ShowWeather";
import axios from "axios";
import { api } from "./Api";

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState("");
  useEffect(() => {
    const fetchWeather = async () => {
      const result = await axios(
        `${api.baseUrl}weather?q=${query}&appid=${api.key}&units=metric`
      );
      console.log(result.data, "show result");
      setWeather(result.data);
      console.log(result.data, "show result1");
    };
    fetchWeather();
  }, [query]);
  return (
    <div className="wrapper">
      <h1>Weather Forecast</h1>
      <Search getQuery={(q) => setQuery(q)} />
      <ShowWeather weatherData={weather} />
    </div>
  );
};

export default App;

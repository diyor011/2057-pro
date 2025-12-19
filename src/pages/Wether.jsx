import React, { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Tashkent");
  const [query, setQuery] = useState("");

  const API_KEY = "675c5848def249d0bbe91241251712";

  const fetchWeather = (cityName) => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&days=3&lang=ru`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const handleSearch = () => {
    if (query.trim()) {
      setCity(query);
      setQuery("");
    }
  };

  if (!weather) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  const current = weather.current;
  const forecast = weather.forecast.forecastday[0];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#0D1B3D] via-[#1E3A5F] to-[#2B5876] text-white p-6 flex flex-col items-center">
      
      <div className="flex gap-2 w-full max-w-lg mt-4">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter city"
          className="flex-1 px-4 py-2 rounded-xl bg-white/20 backdrop-blur text-white outline-none placeholder-white/60"
        />
        <button
          onClick={handleSearch}
          className="px-5 py-2 rounded-xl bg-white/30 hover:bg-white/40 transition"
        >
          Search
        </button>
      </div>

      {/* CURRENT */}
      <div className="text-center mt-6">
        <h2 className="text-sm tracking-widest opacity-70 uppercase">
          {weather.location.name}, {weather.location.country}
        </h2>

        <h1 className="text-[120px] font-light leading-none">
          {Math.round(current.temp_c)}°
        </h1>

        <p className="opacity-80 text-lg -mt-3">
          Feels like {Math.round(current.feelslike_c)}°
        </p>

        <div className="mt-2 text-sm opacity-70">
          <span>Max {Math.round(forecast.day.maxtemp_c)}°</span> •{" "}
          <span>Min {Math.round(forecast.day.mintemp_c)}°</span>
        </div>
      </div>

      {/* HOURLY */}
      <div className="mt-8 bg-white/10 backdrop-blur-2xl rounded-3xl p-6 w-full max-w-lg">
        <p className="text-sm opacity-80">
          {current.condition.text}
        </p>

        <div className="flex justify-between mt-6">
          {forecast.hour.slice(0, 6).map((hour) => (
            <div key={hour.time} className="flex flex-col items-center text-sm">
              <span className="opacity-70">
                {hour.time.split(" ")[1]}
              </span>
              <img src={hour.condition.icon} className="w-8 h-8 my-1" />
              <span>{Math.round(hour.temp_c)}°</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3 DAY */}
      <div className="mt-6 bg-white/10 backdrop-blur-2xl rounded-3xl p-5 w-full max-w-lg">
        <h3 className="text-xl font-semibold mb-3">3-day forecast</h3>

        {weather.forecast.forecastday.map((day) => (
          <div key={day.date} className="flex justify-between py-3 border-b border-white/10">
            <span>
              {new Date(day.date).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </span>
            <img src={day.day.condition.icon} className="w-8" />
            <span>{Math.round(day.day.mintemp_c)}°</span>
            <span>{Math.round(day.day.maxtemp_c)}°</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weather;

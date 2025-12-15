import React from "react";

const Weather = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#0D1B3D] via-[#1E3A5F] to-[#2B5876] text-white p-6 flex flex-col items-center">
      
      <div className="text-center mt-6">
        <h2 className="text-sm tracking-widest opacity-70 uppercase">Uzbekistan</h2>

        <h1 className="text-[120px] font-light leading-none drop-shadow-2xl">
          12°
        </h1>

        <p className="opacity-80 text-lg -mt-3">Feels like 8°</p>

        <div className="mt-2 text-sm opacity-70">
          <span>Max 12°</span> • <span>Min 9°</span>
        </div>
      </div>

      <div className="mt-8 bg-white/10 backdrop-blur-2xl shadow-xl border border-white/20 rounded-3xl p-6 w-full max-w-lg">
        <p className="text-sm opacity-80">
          Expected rain around <span className="font-semibold">17:00</span>.  
          Lowest feel-like temp was <span className="font-semibold">7°</span> at 13:00.
        </p>

        <div className="flex justify-between mt-6">
          {[
            ["Now", "☁️", "12°"],
            ["14", "🌥", "11°"],
            ["15", "☁️", "11°"],
            ["16", "🌥", "10°"],
            ["16:53", "🌅", "-"],
            ["17", "🌧", "9°"],
          ].map(([time, icon, temp]) => (
            <div
              key={time}
              className="flex flex-col items-center text-sm hover:scale-110 transition"
            >
              <span className="opacity-70">{time}</span>
              <span className="text-2xl my-1">{icon}</span>
              <span className="opacity-90">{temp}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Forecast 10 days */}
      <div className="mt-6 bg-white/10 backdrop-blur-2xl shadow-xl border border-white/20 rounded-3xl p-5 w-full max-w-lg">
        <h3 className="text-xl font-semibold mb-3">10-day forecast</h3>

        {[
          ["Today", 9, 12, "70%", "🌧"],
          ["Sat", 6, 10, "85%", "🌧"],
          ["Sun", 6, 16, "90%", "⛈"],
        ].map(([day, min, max, rain, icon]) => (
          <div
            key={day}
            className="flex items-center justify-between py-3 border-b border-white/10 last:border-none"
          >
            <span className="w-24">{day}</span>

            <span className="text-2xl">{icon}</span>

            <div className="flex-1 mx-4">
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white/70 rounded-full"
                  style={{ width: `${(min / max) * 60}%` }}
                ></div>
              </div>
            </div>

            <span>{min}°</span>
            <span>{max}°</span>

            <span className="text-sm opacity-70 ml-2">{rain}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weather;

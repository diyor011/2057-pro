import React, { useEffect, useState } from "react";

const Weather = () => {
  const [airQuality, setAirQuality] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/api/openaq/latest`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch air quality data');
        return res.json();
      })
      .then((data) => {
        console.log("Air Quality Data:", data);
        setAirQuality(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0D1B3D] via-[#1E3A5F] to-[#2B5876] text-white">
        <div className="text-2xl">Loading air quality data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0D1B3D] via-[#1E3A5F] to-[#2B5876] text-white">
        <div className="text-center">
          <p className="text-2xl mb-4">Error loading air quality</p>
          <p className="text-red-300">{error}</p>
        </div>
      </div>
    );
  }

  if (!airQuality || !airQuality.results || airQuality.results.length === 0) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0D1B3D] via-[#1E3A5F] to-[#2B5876] text-white">
        No air quality data available
      </div>
    );
  }

  const locations = airQuality.results;
  const totalStations = locations.length;
  const citiesCount = new Set(locations.map(l => l.city).filter(Boolean)).size;
  const topLocations = locations.slice(0, 6);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#0D1B3D] via-[#1E3A5F] to-[#2B5876] text-white p-6 flex flex-col items-center">
      
      <div className="text-center mt-6">
        <h2 className="text-sm tracking-widest opacity-70 uppercase">
          Uzbekistan
        </h2>

        <h1 className="text-[120px] font-light leading-none drop-shadow-2xl">
          {totalStations}
        </h1>

        <p className="opacity-80 text-lg -mt-3">
          Active Monitoring Stations
        </p>

        <div className="mt-2 text-sm opacity-70">
          <span>{citiesCount} Cities</span> •{" "}
          <span>Air Quality Network</span>
        </div>
      </div>

      <div className="mt-8 bg-white/10 backdrop-blur-2xl shadow-xl border border-white/20 rounded-3xl p-6 w-full max-w-lg">
        <p className="text-sm opacity-80 mb-4">
          Top Monitoring Locations
        </p>

        <div className="space-y-3">
          {topLocations.map((location, index) => (
            <div
              key={location.id}
              className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition"
            >
              <div className="flex-1">
                <p className="font-semibold text-sm">{location.name}</p>
                {location.city && (
                  <p className="text-xs opacity-70">{location.city}</p>
                )}
              </div>
              <div className="text-right">
                <p className="text-xs opacity-70">
                  {location.parameters?.length || 0} parameters
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Parameters Overview */}
      <div className="mt-6 bg-white/10 backdrop-blur-2xl shadow-xl border border-white/20 rounded-3xl p-5 w-full max-w-lg">
        <h3 className="text-xl font-semibold mb-3">Common Parameters Monitored</h3>

        {['PM2.5', 'PM10', 'NO2', 'O3', 'SO2', 'CO'].map((param, index) => (
          <div
            key={param}
            className="flex items-center justify-between py-3 border-b border-white/10 last:border-none"
          >
            <span className="w-24 font-semibold">{param}</span>

            <div className="flex-1 mx-4">
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white/70 rounded-full"
                  style={{ width: `${Math.random() * 40 + 40}%` }}
                ></div>
              </div>
            </div>

            <span className="text-sm opacity-70 ml-2 w-12 text-right">
              Active
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weather;
import React, { useState, useEffect } from 'react'

const OpenAQ = () => {
  const [air, setAir] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAir = async () => {
    try {
      const res = await fetch(`http://localhost:3001/api/openaq/latest`);
      
      if (!res.ok) throw new Error(`API error: ${res.status}`);
      
      const data = await res.json();
      console.log("Full API response:", data);
      setAir(data.results || []);
    } catch (err) {
      console.error("Error fetching air quality:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAir()
  }, [])

  if (loading) return <div className="p-4">Loading air quality data...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Air Quality Monitoring Stations in Uzbekistan</h2>
      
      <p className="mb-4 text-gray-600">Found {air.length} monitoring locations</p>
      
      {air.length === 0 ? (
        <p>No air quality data available.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {air.map((location) => (
            <div key={location.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
              <h3 className="font-bold text-lg mb-2">{location.name}</h3>
              
              {location.city && (
                <p className="text-gray-600">📍 {location.city}</p>
              )}
              
              {location.parameters && location.parameters.length > 0 && (
                <div className="mt-2">
                  <p className="text-sm font-semibold">Measured parameters:</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {location.parameters.map((param) => (
                      <span key={param.id} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {param.name || param.displayName}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {location.coordinates && (
                <p className="text-xs text-gray-500 mt-2">
                  Lat: {location.coordinates.latitude}, Lon: {location.coordinates.longitude}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default OpenAQ
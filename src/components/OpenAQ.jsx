import { useEffect, useState } from "react";

function OpenAQ() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/openaq/latest")
      .then(res => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then(json => {
        console.log("API Response:", json); // Let's see what we get
        setResults(json.results ?? []);
      })
      .catch(err => {
        console.error(err);
        setError("Failed to load data");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  if (results.length === 0) {
    return <p>No air quality data available for Tashkent.</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Air Quality in Tashkent</h2>
      {results.map((loc, index) => (
        <div key={loc.id ?? index} className="mb-4 p-4 border rounded">
          <h4 className="font-semibold">{loc.location}</h4>
          <p>Parameter: {loc.parameter}</p>
          <p>Value: {loc.value} {loc.unit}</p>
          <p className="text-sm text-gray-600">
            Last updated: {new Date(loc.lastUpdated).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}

export default OpenAQ;
// node-server.js
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

// Test route
app.get('/test', (req, res) => 
  res.send('Hello World'))

// OpenAQ endpoint - this is all you need!
app.get('/api/openaq/latest', async (req, res) => {
  try {
    const url = 'https://api.openaq.org/v3/locations?country=UZ';
    console.log('Fetching:', url);
    
    const response = await fetch(url, {
      headers: {
        'X-API-Key': '502e750f503be7170033961ac6a327af0b9a9568a08816cb479d7f80ccf744fe'
      }
    });
    
    if (!response.ok) {
      const text = await response.text();
      return res.status(response.status).json({ error: text });
    }

    const data = await response.json();
    console.log('Success! Got', data.results?.length || 0, 'locations');
    res.json(data);
  } catch (err) {
    console.error('Fetch error:', err);
    res.status(500).json({ error: err.message });
  }
})

app.listen(3001, () => {
  console.log('Proxy server running on http://localhost:3001');
  console.log('Available endpoints:');
  console.log('  - http://localhost:3001/api/openaq/latest');
});
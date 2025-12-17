const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/openaq/latest', async (req, res) => {
  const { city = 'Tashkent' } = req.query;
  
  try {
    const response = await fetch(
      `https://api.openaq.org/v3/latest?city=${city}&limit=10`,
      {
        headers: {
          'X-API-Key': '1d304613b26c97a5dd6fcb4b3213654cc630df484404b0b4e47a4b89d9ccdb3e'
        }
      }
    );
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => {
  console.log('Proxy server running on http://localhost:3001');
});
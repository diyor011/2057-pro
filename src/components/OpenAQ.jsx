import React, { useState } from 'react'
import { useEffect } from 'react';

const OpenAQ = () => {
  const [air, setAir] = useState([]);
  const getAir = async () => {
    try {

      const res = await fetch(`https://api.openaq.org/v3/locations?city=Tashkent  `, {
        method: 'GET',
        headers: {
          "X-API-Key": "cd0116c4806c245e2d81feff608c9af6dad186845edd8810933d446534223ec8"
        }
      });
      const data = await res.json();
      setAir(data.results);
      console.log(data.results);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getAir()
  }, [])

  return (
    <div>OpenAQ</div>
  )
}

export default OpenAQ
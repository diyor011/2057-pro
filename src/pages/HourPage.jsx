import React, { useEffect, useState } from 'react'

const HourPage = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-black p-8 rounded-2xl shadow-xl">
        <div className="text-4xl font-bold tracking-widest bg-black px-6 py-4 rounded-lg shadow-inner">
          {time.toLocaleTimeString()}
        </div>
      </div>
    </div>
  )
}

export default HourPage

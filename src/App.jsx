import React from 'react'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'
import OpenAQ from './components/OpenAQ.jsx'


const App = () => {
  return (
    <div>
      <Navbar/>
        <section className='flex h-full w-full '>

             <Sidebar/>
               <Outlet/>
        </section>
        <OpenAQ />
             

    </div>
  )
}

export default App

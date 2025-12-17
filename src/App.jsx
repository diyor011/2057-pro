import React from 'react'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'
import OpenAQ from './components/OpenAQ.jsx'

import OrderList from './components/OrderList.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
        <section className='flex h-fullr w-full '>

             <Sidebar/>
               <Outlet/>
        </section>
        <OpenAQ />
             

     
    </div>
   

  )
}

export default App

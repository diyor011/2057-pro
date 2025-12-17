import React from 'react'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Navbar/>
    
        <section className='flex h-full w-full '>

             <Sidebar/>
               <Outlet/>
        </section>
             

    </div>



)




  
}

export default App

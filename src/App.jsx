import React from 'react'
import Navbar from './components/Navbar.jsx'
import Weather from './pages/Wether.jsx'
import TodoList from './pages/Todolist.jsx'
import Sidebar from './components/Sidebar'
import HourPage from './pages/HourPage'
import { Outlet } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Navbar/>
    
        <section className='flex h-fullr w-full '>

             <Sidebar/>
               <Outlet/>
        </section>
             

    </div>
  )
}

export default App

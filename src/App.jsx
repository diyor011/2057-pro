import React from 'react'
import Navbar from './components/Navbar.jsx'
import Weather from './pages/Wether.jsx'
import TodoList from './pages/Todolist.jsx'
import Sidebar from './components/Sidebar'
import HourPage from './pages/HourPage'


const App = () => {
  return (
    <div>
      <Navbar/>
            <Weather/>  
            <TodoList/>
             <Sidebar/>
             
<HourPage/>
    </div>



)




  
}

export default App

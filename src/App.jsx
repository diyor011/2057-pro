import React from 'react'
import Navbar from './components/Navbar.jsx'
import Weather from './pages/Wether.jsx'
import TodoList from './pages/Todolist.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
            <Weather/>  
            <TodoList/>
    </div>



)


}

export default App

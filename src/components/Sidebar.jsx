import React from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
=======
import HourPage from '../pages/HourPage'
>>>>>>> 0e4e2f0d57e4a72218eec37847b98994f3159a46

const Sidebar = () => {
    return (
        <div>

            <div className="min-h-full  drawer lg:drawer-open">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 h-full w-80 p-4">
                        {/* Sidebar content here */}
<<<<<<< HEAD
<li className='bg-base-100 text-base-content'><Link to={'hour'}> hourpage</Link></li>
<li className='bg-base-100 text-base-content'><Link to={'todo'}> to do list</Link></li>
<li className='bg-base-100 text-base-content'><Link to={'weather'}> weather</Link></li>
<li className='bg-base-100 text-base-content'><Link to={'staff'}> staff</Link></li>

=======
                        <Link to="/hour"><li>Hour Page</li></Link>
                        <Link to="/converter"><li>Currency Converter</li></Link>
                        <Link to="/staff"><li>Staff Table</li></Link>
                        <Link to="/todo"><li>Todo List</li></Link>
                        <Link to="/weather"><li>Weather</li></Link>
                        
>>>>>>> 0e4e2f0d57e4a72218eec37847b98994f3159a46
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
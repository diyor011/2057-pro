import React from 'react'
import { Link } from 'react-router-dom'

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
<li ><Link to={'Hour'}> hourpage</Link></li>
<li ><Link to={'todo'}> to do list</Link></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
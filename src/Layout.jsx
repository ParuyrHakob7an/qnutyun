import React from 'react'
import Home from './Pages/Home'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div>
            <Home />
            <Outlet />
        </div>
    )
}

export default Layout
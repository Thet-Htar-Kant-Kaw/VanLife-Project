import React from "react";
import { Outlet } from "react-router-dom";
import Income from './Income.jsx'
import Reviews from './Reviews.jsx'

export default function Dashboard() {
    return (
        <>
            <h1>Dashboard</h1>
            <Outlet />
        </>
        
    )
}
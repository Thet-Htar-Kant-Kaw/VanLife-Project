import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

export default function HostLayout() {
    const activeStyles={
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    }

    return(
        <>
            <nav className="host-nav">
                <NavLink 
                    to="/host"
                    end
                    style={({isActive}) => isActive ? activeStyles : [] }
                >Dashboard</NavLink>

                <NavLink 
                    to="income"
                    style={({isActive}) => isActive ? activeStyles : [] }
                >Income</NavLink>

                <NavLink 
                    to="vans"
                    style={({isActive}) => isActive ? activeStyles : [] }
                >Vans</NavLink>
                
                <NavLink 
                    to="reviews"
                    style={({isActive}) => isActive ? activeStyles : [] }
                >Reviews</NavLink>
            </nav>
            <Outlet />
        </>
        
    )
}
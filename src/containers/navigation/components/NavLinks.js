import React from 'react';

import { NavLink } from 'react-router-dom'

export default function NavLimks() {
    return (
        <div className="nav-bar-links">
            <NavLink to="/" id="nav-bar-links">Home</NavLink><br />
            <NavLink to="/about" id="nav-bar-links">About</NavLink><br />
            <NavLink to="/projects" id="nav-bar-links">Projects</NavLink><br />
            <NavLink to="/contact" id="nav-bar-links">Contact</NavLink><br />
        </div>
    )
}
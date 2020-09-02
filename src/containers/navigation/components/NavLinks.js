import React from 'react';

import { NavLink } from 'react-router-dom'

export default function NavLimks() {

    function changeColorOnHover(e) {
        e.target.style.color = 'black';
        e.target.style.textDecoration = 'underline';
    }

    function changeColorLeave(e) {
        e.target.style.color = 'white';
        e.target.style.textDecoration = '';
    }

    return (
        <div className="nav-bar-links">
            <NavLink to="/" id="nav-bar-links" onMouseEnter={changeColorOnHover} onMouseLeave={changeColorLeave}><strong>Home</strong></NavLink><br />
            <NavLink to="/about" id="nav-bar-links" onMouseEnter={changeColorOnHover} onMouseLeave={changeColorLeave}><strong>About</strong></NavLink><br />
            <NavLink to="/projects" id="nav-bar-links" onMouseEnter={changeColorOnHover} onMouseLeave={changeColorLeave}><strong>Projects</strong></NavLink><br />
            <NavLink to="/contact" id="nav-bar-links" onMouseEnter={changeColorOnHover} onMouseLeave={changeColorLeave}><strong>Contact</strong></NavLink><br />
        </div>
    )
}
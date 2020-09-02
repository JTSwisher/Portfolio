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

    let routes = ["Home", "About", "Projects", "Contact"]

    let links = routes.map(r => <NavLink to={'/' + r} id="nav-bar-links" onMouseEnter={changeColorOnHover} onMouseLeave={changeColorLeave}><strong>{r}</strong></NavLink> )

    return (
        
        <div className="nav-bar-links">
            { links }
        </div>
    )
}
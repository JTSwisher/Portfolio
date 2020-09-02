import React from 'react';

import NavLinks from './NavLinks';
import NavIcons from './NavIcons'

export default function NavBar(props) {

    function handleDisplayState() {
       return  props.displayState ? {display: ''} : {display: 'none'}
    }

    return (
        <div className="nav-bar" style={handleDisplayState()} onMouseLeave={props.hoverLeave}>
            <NavLinks />
            <NavIcons />
        </div>
    )
}
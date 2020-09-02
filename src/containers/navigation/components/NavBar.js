import React from 'react';

import NavLinks from './NavLinks'

export default function NavBar(props) {

    function handleDisplayState() {
       return  props.displayState ? {display: ''} : {display: 'none'}
    }

    return (
        <div className="nav-bar" style={handleDisplayState()} onMouseLeave={props.hoverLeave}>
            <NavLinks />
        </div>
    )
}
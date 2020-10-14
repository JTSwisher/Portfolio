import React, { useState } from 'react';

import { FaBars } from 'react-icons/fa'

export default function NavMenuToggle(props) {

    const [color, setColor] = useState(true);

    function handleIconHover() {
         setColor( !color)
    }

    function iconColor() {
        return color ? {color: 'black'} : {color: '#77A6F7'}
    }

    return (
        <div className="nav-menu-toggle">
            <FaBars id="nav-menu-icon" style={iconColor()} onClick={props.clickEvent} onMouseEnter={handleIconHover} onMouseLeave={handleIconHover}/>
        </div>
    )
}


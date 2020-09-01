import React from 'react';

export default function NavBar(props) {

    function handleDisplayState() {
       return  props.displayState ? {display: ''} : {display: 'none'}
    }

    

    return (
        <div className="nav-bar" style={handleDisplayState()} onMouseLeave={props.hoverLeave}></div>
    )
}
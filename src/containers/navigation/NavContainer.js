import React, { Component } from 'react';

import NavBar from './components/NavBar';
import NavMenuToggle from './components/NavMenuToggle';

class NavContainer extends Component {

    render() {
        return(
            <div>
                <NavMenuToggle />
                <NavBar />
            </div>
        )
    }
}

export default NavContainer;
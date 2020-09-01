import React, { Component } from 'react';

import NavBar from './components/NavBar';
import NavMenuToggle from './components/NavMenuToggle';

class NavContainer extends Component {

    state = {
        display: true
    }

    handleMenuDisplay = (e) => {
        this.setState({
            display: !this.state.display
        })
    }

    render() {
        return(
            <div>
                <NavMenuToggle clickEvent={this.handleMenuDisplay} />
                <NavBar displayState={this.state.display} />
            </div>
        )
    }
}

export default NavContainer;
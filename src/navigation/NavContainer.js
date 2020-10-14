import React, { Component } from 'react';
import NavBar from './NavBar';
import NavMenuToggle from './NavMenuToggle';
import './Nav.css'

class NavContainer extends Component {

    state = {
        display: false
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
                <NavBar displayState={this.state.display} hoverLeave={this.handleMenuDisplay} clickEvent={this.handleMenuDisplay} />
            </div>
        )
    }
}

export default NavContainer;
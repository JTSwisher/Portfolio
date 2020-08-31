import React from 'react';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaRegEnvelope, } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'


function LeftSide() {

    function changeColorOnHover(e) {
        e.target.style.color = 'black'
        e.target.style.textDecoration = 'underline'
    }

    function changeColorLeave(e) {
        e.target.style.color = 'white'
        e.target.style.textDecoration = ''
    }

    return (
        <div className="home-left-side">
            <div className="nav">
                <NavLink to="/about" className="navlinks" onMouseEnter={changeColorOnHover} onMouseLeave={changeColorLeave}><strong>About</strong></NavLink>
                <NavLink to="/projects" className="navlinks" onMouseEnter={changeColorOnHover} onMouseLeave={changeColorLeave}><strong>Projects</strong></NavLink>
                <NavLink to="/contact" className="navlinks" onMouseEnter={changeColorOnHover} onMouseLeave={changeColorLeave}><strong>Contact</strong></NavLink>
            </div>
            <div id="greeting-left">
                <h1 className="greeting-left">
                    <Typewriter
                    options={{
                        strings: ("Hey there,<br /> I'm Jeff!"),
                        autoStart: true,
                    }} 
                    />
                </h1>
            </div>
            <div className="contact-greeting-left">
                    <p id="contact-greeting-left"><strong>Let's create together.</strong></p>
                    <address className="contact">
                        <a href="https://github.com/JTSwisher" target="_blank" rel="noopener noreferrer"><FaGithub id="home-icons" /></a>
                        <a href="https://www.linkedin.com/in/jeffswisher/" target="_blank" rel="noopener noreferrer"><FaLinkedin id ="home-icons" /></a>
                        <a href="mailto:jefftswisher@gmail.com"><FaRegEnvelope id="home-icons" /></a>
                    </address>
            </div>
        </div>
    )
}

export default LeftSide;
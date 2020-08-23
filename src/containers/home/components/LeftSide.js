import React from 'react';
import Typewriter from 'typewriter-effect';
import { FaGithubSquare, FaLinkedin, FaRegEnvelope, } from 'react-icons/fa';

function LeftSide() {
    return (
        <div className="home-left-side">
            <nav>
                
            </nav>
            <div id="greeting-left">
                <h1 className="greeting-left"><Typewriter
                    options={{
                        strings: ("Hey,<br /> I'm Jeff!"),
                        autoStart: true,
                    }} 
                /></h1>
            </div>
            <div className="contact-greeting-left">
                    <p id="contact-greeting-left">Lets work together.</p>
                    <address className="contact">
                        <FaGithubSquare id="home-icons" />
                        <FaLinkedin id ="home-icons" />
                        <FaRegEnvelope id="home-icons" />
                    </address>
            </div>
        </div>
    )
}

export default LeftSide;
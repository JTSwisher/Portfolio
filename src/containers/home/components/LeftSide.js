import React from 'react';
import Typewriter from 'typewriter-effect';
import { FaGithubSquare, FaLinkedin, FaRegEnvelope, } from 'react-icons/fa';


function LeftSide() {
    return (
        <div className="home-left-side">
            <div id="greeting-left">
                <h1 className="greeting-left"><Typewriter
                    options={{
                        strings: ("Hey,<br /> I'm Jeff!"),
                        autoStart: true,
                    }} 
                /></h1>
            </div>
            <div className="contact-greeting-left">
                    <p id="contact-greeting-left"><strong>Let's work together.</strong></p>
                    <address className="contact">
                        <a href="https://github.com/JTSwisher" target="_blank" rel="noopener noreferrer"><FaGithubSquare id="home-icons" /></a>
                        <a href="https://www.linkedin.com/in/jeffswisher/" target="_blank" rel="noopener noreferrer"><FaLinkedin id ="home-icons" /></a>
                        <a href="mailto:jefftswisher@gmail.com"><FaRegEnvelope id="home-icons" /></a>
                    </address>
            </div>
        </div>
    )
}

export default LeftSide;
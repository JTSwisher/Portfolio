import React from 'react';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaRegEnvelope, } from 'react-icons/fa';



function LeftSide() {
    const routes = ["About", "Projects", "Contact"]
    const links = routes.map(r => <a id="nav-links" href={"#" + r}>{r}</a>)

    return (
        <div className="home-left-side">
            <div className="nav">
                { links }
            </div>
            <div className="greeting-left">
                <h1 id="greeting-left">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.pauseFor(500)
                        .typeString("Hey there,<br /> I'm Jeff!")
                        .start();
                    }}
                />
                </h1>
            </div>
            <div className="contact-greeting-left">
                    <p id="contact-greeting-left"><strong>Let's create together.</strong></p>
                    <address className="contact">
                        <a href="https://github.com/JTSwisher" target="_blank" rel="noopener noreferrer"><FaGithub id="home-icons" /></a>
                        <a href="https://www.linkedin.com/in/jeffswisher/" target="_blank" rel="noopener noreferrer"><FaLinkedin id ="home-icons" /></a>
                        <a href="mailto:jeff@jtswisher.com"><FaRegEnvelope id="home-icons" /></a>
                    </address>
            </div>
        </div>
    )
}

export default LeftSide;
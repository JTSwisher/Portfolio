import React from 'react';

import { FaGithub, FaLinkedin, FaRegEnvelope, } from 'react-icons/fa';

export default function NavIcons() {

   

    return(
        <div className="nav-bar-icons">
            <a href="https://github.com/JTSwisher" target="_blank" rel="noopener noreferrer" ><FaGithub id="nav-bar-icons" /></a>
            <a href="https://www.linkedin.com/in/jeffswisher/" target="_blank" rel="noopener noreferrer" ><FaLinkedin id ="nav-bar-icons" /></a>
            <a href="mailto:jefftswisher@gmail.com" ><FaRegEnvelope id="nav-bar-icons" /></a>
        </div>
    )
}
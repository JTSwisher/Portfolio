import React from 'react';
import image  from '../../../assets/image.JPG'

function AboutContent() {
    return (
        <div className="about">
            <div className="about-image">
                <img src={image} alt=""/>
            </div>
            <div className="about-header">
                <h1>This is Me</h1> 
            </div>
            <div className="about-body"> 
                <p>
                    I have a deep interest in technology and have always been fascinated by the role it plays in our everyday lives.<br /><br />

                    Since I can remember I have always enjoyed building and tinkering with things. From building Lego fortresses with friends to
                    creating intricate cities in the video game SimCity. The sense of accomplishment and pride that comes with building something from the ground up is one of my favorite feelings.<br /><br /> 

                    I fell in love with programming for the opportunities it provides. Being able to create, solve unique problems, and contribute to a project that has the possibility of being used by people all over the world is very exciting to me.
                    Currently my primary focus is in fullstack web application development using Javascript and Ruby technologies and I am hoping to become a part of an organization where my development skills can bring value to an existing team.

                </p>
            </div>
            <div className="skills">
                <i id="about-icons" class="devicon-javascript-plain"></i>
                <i id="about-icons" class="devicon-react-original-wordmark"></i>
                <i id="about-icons" class="devicon-ruby-plain-wordmark"></i>
                <i id="about-icons" class="devicon-rails-plain-wordmark"></i>
                <i id="about-icons" class="devicon-html5-plain-wordmark"></i>
                <i id="about-icons" class="devicon-css3-plain-wordmark"></i>
            </div>
        </div>
    )
}

export default AboutContent;
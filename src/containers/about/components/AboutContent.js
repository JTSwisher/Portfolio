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
                    I have a passion for technology<br /><br /> Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br /> Duis aute irure dolor in reprehenderit 
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className="skills">
                <i id="about-icons" class="devicon-javascript-plain"></i>
                <i id="about-icons" class="devicon-react-original-wordmark"></i>
                <i id="about-icons" class="devicon-ruby-plain-wordmark"></i>
                <i id="about-icons" class="devicon-rails-plain-wordmark"></i>
                <i id="about-icons" class="devicon-html5-plain-wordmark"></i>
                <i id="about-icons" class="devicon-css3-plain-wordmark"></i>
                <i id="about-icons" class="devicon-postgresql-plain-wordmark"></i>
            </div>
        </div>
    )
}

export default AboutContent;
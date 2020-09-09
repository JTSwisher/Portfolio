import React from 'react';

import Button from '../../../miscellaneous/Button'

export default function Project(props) {

    return(
        <div className="project-display">
            <img className="project-gif-demo" alt="App demo" src={props.project.video}/>
            <div className="project-group">
                <h1 id="project-title">{props.project.title}</h1>
                <p>{props.project.about}</p>
                <div className="button-group">
                    <Button class="repo" url={props.project.links.github} name="Repo"/>
                    <Button class="demo" url={props.project.links.videoDemo} name="Demo"/>
                </div>
            </div>
        </div>
    )
}
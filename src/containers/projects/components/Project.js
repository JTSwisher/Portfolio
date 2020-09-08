import React from 'react';

export default function Project(props) {

    return(
        <div className="project-display">
            <img className="project-gif-demo" alt="App demo" src={props.project.video}/>
            <div className="project-group">
                <h1 id="project-title">{props.project.title}</h1>
                <p>{props.project.about}</p>
            </div>
        </div>
    )
}
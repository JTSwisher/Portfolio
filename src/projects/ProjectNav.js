import React from 'react';

export default function ProjectNav(props) {

    const projects = ["DailyDash", "GifBook", "CocktailKeeper"]
    const links = projects.map(p => <h3 className="project-nav-links" id={p} onClick={ (e) => props.projectSelect(e)} >{p}</h3>)
    return (
        <div className="project-nav">
            <h1 className="project-nav-title">Projects</h1>
            <nav className="project-nav-link-group">
                { links }
            </nav>
        </div>
        
    )
}
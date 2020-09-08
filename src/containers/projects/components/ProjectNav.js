import React from 'react';

export default function ProjectNav(props) {

    const projects = ["DailyDash", "GifBook", "CocktailKeeper"]
    const links = projects.map(p => <h3 id={p} onClick={ (e) => props.projectSelect(e)} >{p}</h3>)
    return (
        <nav className="project-nav">
            <h1>Projects</h1>
            { links }
        </nav>
    )
}
import React from 'react';

import Project from './Project';
import { Projects } from '../Projects'

export default function DisplayProject(props) {

    let project = Projects[props.project]

    return (
        <div>
            <Project project={project}/>
        </div>
    )
}
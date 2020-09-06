import React, { Component } from 'react';

import NavContainer from '../navigation/NavContainer';
import ProjectNav from './components/ProjectNav'


export default class ProjectContainer extends Component{

    state = {
        project: 'DailyDash',
    }

    handleProjectSelect = (e) => {
        this.setState({
            project: ''
        })
    }

    render() {
        return (
            <div className="project-container">
                <NavContainer />
                <ProjectNav projectSelect={this.handleProjectSelect}/>
            </div>
        )
    }
}
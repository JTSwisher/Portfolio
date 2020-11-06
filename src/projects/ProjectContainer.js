import React, { Component } from 'react';
import ProjectNav from './ProjectNav';
import DisplayProject from './DisplayProject'
import './Projects.css'


export default class ProjectContainer extends Component{

    state = {
        project: 'DailyDash',
    }

    handleProjectSelect = (e) => {
        this.setState({
            project: e.target.id
        })
    }

    render() {
        return (
            <div className="project-container">
                <ProjectNav projectSelect={this.handleProjectSelect} />
                <DisplayProject project={this.state.project} />
            </div>
        )
    }
}
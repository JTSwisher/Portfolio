import React, { Component } from 'react';

import NavContainer from '../navigation/NavContainer';
import ProjectNav from './ProjectNav';
import DisplayProject from './DisplayProject'


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
                <NavContainer />
                <ProjectNav projectSelect={this.handleProjectSelect} />
                <DisplayProject project={this.state.project} />
            </div>
        )
    }
}
import React, { Component } from 'react';

import NavContainer from '../navigation/NavContainer';
import ProjectNav from './components/ProjectNav';
import DisplayProject from './components/DisplayProject'


export default class ProjectContainer extends Component{

    state = {
        project: 'dailydash',
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
                <ProjectNav projectSelect={this.handleProjectSelect}/>
                <DisplayProject project={this.state.project}/>
            </div>
        )
    }
}
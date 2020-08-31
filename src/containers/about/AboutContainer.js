import React from 'react'

import NavContainer from '../navigation/NavContainer'

import AboutContent from './components/AboutContent'
import SkillsContent from './components/SkillsContent'

function AboutContainer() {
    return (
        <div className="flex-container">
            <NavContainer />
            <AboutContent />
            <SkillsContent />
        </div>
    )
}

export default AboutContainer;
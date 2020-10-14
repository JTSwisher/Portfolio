import React from 'react'

import NavContainer from '../navigation/NavContainer'

import AboutContent from './AboutContent'
import SkillsContent from './SkillsContent'

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
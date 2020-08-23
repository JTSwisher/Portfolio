import React from 'react'

import AboutContent from './components/AboutContent'
import SkillsContent from './components/SkillsContent'

function AboutContainer() {
    return (
        <div className="flex-container">
            <AboutContent />
            <SkillsContent />
        </div>
    )
}

export default AboutContainer;
import React from 'react';
import LeftSide from './components/LeftSide'
import RightSide from './components/RightSide'

function HomeContainer() {
    return(
        <div className="flex-container">
            <LeftSide />
            <RightSide />
        </div>
    )
}

export default HomeContainer;
import React from 'react';
import LeftSide from './LeftSide'
import RightSide from './RightSide'

function HomeContainer() {
    return(
        <div className="flex-container">
            <LeftSide />
            <RightSide />
        </div>
    )
}

export default HomeContainer;
import React from 'react';

export default function(props) {
    return (
        <div className="button">
            <a className={props.class} href={props.url} target="_blank" rel="noopener noreferrer">{props.name}</a>
        </div>
    )
}


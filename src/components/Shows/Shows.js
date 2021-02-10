import * as SVG from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../../App.scss';

export function Shows() {
    return (
        <div className="no-event">
            <FontAwesomeIcon icon={SVG.faCompactDisc} size="5x" ></FontAwesomeIcon>
            <div>No Upcoming Shows!</div>
        </div>

    );
}

export default Shows;
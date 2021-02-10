import * as SVG from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../../App.scss';

export function Events() {
    return (
        <div className="no-event">
            <FontAwesomeIcon icon={SVG.faCalendarAlt} size="5x" ></FontAwesomeIcon>
            <div>No Upcoming Events!</div>
        </div>
    );
}

export default Events;

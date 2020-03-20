import '../../App.css';

import * as SVG from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export function Plays() {
    return(
        <div className="no-event">
        <FontAwesomeIcon icon={SVG.faNewspaper} size="5x" ></FontAwesomeIcon>
        <div>No Upcoming Plays!</div>
    </div>
    );
}

export default Plays;
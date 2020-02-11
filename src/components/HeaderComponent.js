import './../App.css';

import * as SVG from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <a className="navbar-brand" href="/home">BookMyMovie</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" id="toggle"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="/home">Movies</a>
                    <a className="nav-item nav-link" href="/events">Events</a>
                    <a className="nav-item nav-link active" href="/shows">Popular Shows</a>
                    <a className="nav-item nav-link" href="/play">Plays</a>
                </div>
            </div>
            <div className="position-absolute" style={{
                right: '0',
                padding: '15px'
            }}>
                <FontAwesomeIcon icon={SVG.faVideo} color="#344955" size="3x" ></FontAwesomeIcon>
            </div>
        </nav>
    );
}

export default Header;
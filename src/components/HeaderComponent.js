import './../App.css';

import * as SVG from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeState: 'movie'
        };
        this.onActiveLink = this.onActiveLink.bind(this);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg fixed-top">
                <Link className="navbar-brand" to="/home">BookMyMovie </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" id="toggle"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className={'nav-item nav-link ' + (this.state.activeState === 'movie' ? 'active' : '')}
                            to="/home" onClick={() => this.onActiveLink('movie')}>Movies</Link>
                        <Link className={'nav-item nav-link ' + (this.state.activeState === 'events' ? 'active' : '')}
                            to="/events" onClick={() => this.onActiveLink('events')}>Events</Link>
                        <Link className={'nav-item nav-link ' + (this.state.activeState === 'shows' ? 'active' : '')}
                            to="/shows" onClick={() => this.onActiveLink('shows')}>Popular Shows</Link>
                        <Link className={'nav-item nav-link ' + (this.state.activeState === 'play' ? 'active' : '')}
                            to="/play" onClick={() => this.onActiveLink('play')}>Plays</Link>
                    </div>
                </div>
                <div className="position-absolute" style={{ right: '0', padding: '15px' }}>
                    <FontAwesomeIcon icon={SVG.faVideo} color="#344955" size="3x" ></FontAwesomeIcon>
                </div>
            </nav>
        );
    };

    onActiveLink(activeState) {
        this.setState({
            activeState: activeState
        });
    }
}

export default Header;
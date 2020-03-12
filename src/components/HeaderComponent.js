import './../App.css';

import * as SVG from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

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
                <a className="navbar-brand" href="/home">BookMyMovie</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" id="toggle"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className={'nav-item nav-link ' + (this.state.activeState === 'movie' ? 'active' : '')}
                            href="/home" onClick={() => this.onActiveLink('movie')}>Movies</a>
                        <a className={'nav-item nav-link ' + (this.state.activeState === 'events' ? 'active' : '')}
                            href="/events" onClick={() => this.onActiveLink('events')}>Events</a>
                        <a className={'nav-item nav-link ' + (this.state.activeState === 'shows' ? 'active' : '')}
                            href="/shows" onClick={() => this.onActiveLink('shows')}>Popular Shows</a>
                        <a className={'nav-item nav-link ' + (this.state.activeState === 'play' ? 'active' : '')}
                            href="/play" onClick={() => this.onActiveLink('play')}>Plays</a>
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
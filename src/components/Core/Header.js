import '../../App.css';

import * as SVG from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

export class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeState: 'movie'
        };
        this.onActiveLink = this.onActiveLink.bind(this);
    }

    componentDidMount() {
        switch (this.props.location.pathname != null) {
            case this.props.location.pathname.includes('movie'):
                this.onActiveLink('movie');
                break;
            case this.props.location.pathname.includes('events'):
                this.onActiveLink('events');
                break;
            case this.props.location.pathname.includes('shows'):
                this.onActiveLink('shows');
                break;
            case this.props.location.pathname.includes('play'):
                this.onActiveLink('play');
                break;
            default:
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg fixed-top">
                <Link className="navbar-brand" to="/home">BOOK<span style={{ color: '#d72323', fontFamily: 'inherit' }}>M</span>YMOVIE</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" style={{ zIndex: 11 }}>
                    <span className="navbar-toggler-icon" id="toggle">
                        <FontAwesomeIcon icon={SVG.faFilm} color="#ff304f" size="2x" className="toggle-icon" ></FontAwesomeIcon>
                    </span>
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
                <div className="position-absolute brand-image d-none d-md-block" style={{ right: '0', padding: '15px' }}>
                    <FontAwesomeIcon icon={SVG.faFilm} color="#ff304f" size="3x" ></FontAwesomeIcon>
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

export default withRouter(Header);
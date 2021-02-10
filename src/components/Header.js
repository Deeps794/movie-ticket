import '../App.scss';

import * as SVG from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

export class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeState: 'movie',
            scrollTop: 0
        };
        this.onActiveLink = this.onActiveLink.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll(event) {
       this.setState({scrollTop: document.getElementById('BOXOffice').scrollTop});
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        console.log(this.props.location.pathname.includes('movies'));
        switch (this.props.location.pathname != null) {
            case this.props.location.pathname.includes('movies'):
                this.onActiveLink('movies');
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
                this.onActiveLink('');
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg fixed-top" 
                style={{background: this.state.scrollTop > 0 ? '': 'transparent',
                boxShadow: this.state.scrollTop > 0 ? '': 'none'}}>
                <Link className="navbar-brand" to="/home" onClick={() => this.onActiveLink('')}>BO<span style={{ color: 'red', fontFamily: 'inherit' }}>X</span>OFFICE</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" style={{ zIndex: 11 }}>
                    <span className="navbar-toggler-icon" id="toggle">
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className={'nav-item nav-link ' + (this.state.activeState === 'movies' ? 'active' : '')}
                            to="/movies" onClick={() => this.onActiveLink('movies')}>Movies</Link>
                        <Link className={'nav-item nav-link ' + (this.state.activeState === 'events' ? 'active' : '')}
                            to="/events" onClick={() => this.onActiveLink('events')}>Events</Link>
                        <Link className={'nav-item nav-link ' + (this.state.activeState === 'shows' ? 'active' : '')}
                            to="/shows" onClick={() => this.onActiveLink('shows')}>Popular Shows</Link>
                        <Link className={'nav-item nav-link ' + (this.state.activeState === 'play' ? 'active' : '')}
                            to="/play" onClick={() => this.onActiveLink('play')}>Plays</Link>
                    </div>
                </div>
                <div className="position-absolute brand-image d-none d-md-block" style={{ right: '0', padding: '15px' }}>
                    <FontAwesomeIcon icon={SVG.faFilm} color="#FFEA00" size="3x" ></FontAwesomeIcon>
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
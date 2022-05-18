import * as SVG from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../App.scss';

export class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scrollTop: 0
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        this.setState({ scrollTop: document.getElementById('BOXOffice').scrollTop });
        // style={{
        //     background: this.state.scrollTop > 0 ? '' : 'transparent',
        //     boxShadow: this.state.scrollTop > 0 ? '' : 'none'
        // }}
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg fixed-top bg-black" id="header">
                <Link className="navbar-brand mx-3" to="/">BO<span style={{ color: 'red', fontFamily: 'inherit' }}>X</span>OFFICE</Link>
                <button className="navbar-toggler mx-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false">
                    <FontAwesomeIcon icon={SVG.faBars} color="#F5F5F5" size="1x" ></FontAwesomeIcon>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mb-2">
                        <NavLink className='nav-item nav-link' to="/movies">Movies</NavLink>
                        <NavLink className='nav-item nav-link' to="/events">Events</NavLink>
                        <NavLink className='nav-item nav-link' to="/shows">Popular Shows</NavLink>
                        <NavLink className='nav-item nav-link' to="/play">Plays</NavLink>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
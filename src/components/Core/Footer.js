import '../../App.css';

import * as SVG from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

export class Footer extends Component {

    render() {
        return (
            <div className="row justify-content-center footer" style={{
                color: '#ff304f',
                width: '100%',
                bottom: '0'
            }}>
                <p style={{
                    fontSize: '10px',
                    fontWeight: 'bold',
                    margin: '5px 0'
                }}><span className="px-2">&copy; 2020 bookmymovie.com</span>
                    <FontAwesomeIcon icon={SVG.faVideo} color="#ff304f" size="1x" ></FontAwesomeIcon>
                </p>
            </div >
        );
    }
}

export default Footer;

import '../App.css';

import * as SVG from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export function Footer() {
    return (
        <div className="row justify-content-center footer position-fixed" style={{
            color: '#344955',
            width: '100%',
            bottom: '0'
        }}>
            <p style={{
                fontSize: '10px',
                fontWeight: 'bold',
                margin: '5px 0'
            }}><span className="px-2">&copy; 2020 bookmymovie.com</span>
                <FontAwesomeIcon icon={SVG.faVideo} color="#344955" size="1x" ></FontAwesomeIcon>
            </p>
        </div >
    );
}

export default Footer;
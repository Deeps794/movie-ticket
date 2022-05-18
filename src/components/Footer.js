import * as SVG from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../App.scss';

export const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="row justify-content-center footer-wrapper position-fixed m-0 w-100 bg-black">
            <p className="d-flex justify-content-center align-items-center m-3">
                <span className="px-2">&copy; {currentYear} bookmymovie.com</span>
                <FontAwesomeIcon icon={SVG.faVideo} color="#F5F5F5" size="1x" ></FontAwesomeIcon>
            </p>
        </footer >
    );
}

export default Footer;

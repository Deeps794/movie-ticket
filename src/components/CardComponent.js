import '../App.css';

import * as SVG from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Card(props) {
    return (
        <div className="card">
            <img className="card-img-top" src={'images/film-cards/' + props.movieId + '.jpg'} alt="Card cap" />
            <div className="card-body p-2">
                <h5 className="card-title my-0 d-inline-block">Movie Title</h5>
                <span className="px-2 position-relative" style={{ bottom: '2px' }}>
                    <FontAwesomeIcon icon={SVG.faStar}></FontAwesomeIcon>
                </span>
                <p className="card-text" style={{ fontSize: '12px' }}>Starring Actor 1, Actor 2 and Actor 3.</p>
            </div>
        </div>
    );
}

export default Card;
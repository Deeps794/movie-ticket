import '../../App.css';

import * as SVG from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function MovieCard(props) {
    return (
        <div className="card">
            <img className="card-img-top" src={'images/Movies/' + props.path + '/' + props.movie.movieId + '.jpg'} alt="Card cap" />
            <div className="card-body px-0 py-2" style={{ height: '95px' }}>
                <h5 className="card-title my-0 d-inline-block">{props.movie.movieName}</h5>
                <span className="position-absolute" style={{ right: '10px', float: 'right' }}>
                    <FontAwesomeIcon icon={SVG.faHeart}></FontAwesomeIcon>
                </span>
                <p className="card-text" style={{ fontSize: '12px' }}>
                    <span style={{color: '#ff304f', fontWeight: 'bold'}}>Staring</span> 
                    {
                        props.movie.cast.map((castActor, index) =>
                            <span key={index}> {castActor}, </span>
                        )
                    }
                </p>
            </div>
        </div>
    );
}

export default MovieCard;
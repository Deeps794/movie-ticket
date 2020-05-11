import './Movie.css';

import * as SVG from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

import { IMAGE } from '../../Axios/ImageApi';
import { getData } from '../../Services/bo.http.service';



function Movies(props) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const movieState = props.location.state ? props.location.state : 'now_playing';
        getData('movie/' + movieState).then(response => {
            setMovies(response.data.results);
        });
    }, [props.location.state]);

    return (
        <div className="row" style={{ paddingTop: '74px' }}>
            <div className="col">
                <span className="card-group-title">Now Playing</span>
                {getTheatresList(movies)}
            </div>
        </div>
    );
}

function getTheatresList(movies) {
    return movies.map(movie =>
        <div className="outer-wrap p-4" key={movie.id}>
            <img src={IMAGE.BASE_URL + IMAGE.POSTER_SIZE + movie.poster_path} className="img-wrap" alt="..." />
            <div className="content-wrap px-4">
                <div className="card-body py-2 px-0">
                    <h3 className="card-title">{movie.title}</h3>
                    <p className="card-text">{movie.overview}</p>
                    <span className="card-text">
                        {
                            new Array(5).fill(0).map((rating, index) =>
                                <FontAwesomeIcon key={index} icon={SVG.faStar}
                                    color={Math.floor(movie.vote_average / 2) > index ? '#ff304f' : '#5d5d5a'} size="1x">
                                </FontAwesomeIcon>
                            )
                        }
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Movies;
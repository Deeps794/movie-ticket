import './Movie.css';

import React, { useEffect, useState } from 'react';

import { IMAGE } from '../../Axios/ImageApi';
import { getData } from '../../Services/bo.http.service';

function Movies(props) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const movieState = props.location.state ? props.location.state.value : 'now_playing';
        getData('movie/' + movieState).then(response => {
            console.log(response);
            setMovies(response.data.results);
        });
    }, [props.location.state]);

    return (
        <div className="row" style={{ paddingTop: '74px' }}>
            <div className="col">
                <div className="card-group-title">
                    {props.location.state ? props.location.state.name : 'Now Playing'}
                </div>
                <div className="d-flex" style={{ flexFlow: 'row wrap' }}>
                    {getMovies(movies, props)}
                </div>
            </div>
        </div>
    );
}

function routeToMovie(movieId, props) {
    props.history.push('movie/' + movieId);
}

function getMovies(movies, props) {
    return movies.map(movie =>
        <div className="outer-wrap mx-2 my-4" key={movie.id} onClick={() => routeToMovie(movie.id, props)}>
            <div className="position-relative">
                <img src={IMAGE.BASE_URL + IMAGE.POSTER_SIZE + movie.poster_path} className="img-wrap" alt="..." />
            </div>

            <div className="content-wrap position-relative" style={{ flex: '1' }}>
                <div className="card-body px-0 py-2">
                    <div className="movie-title-wrap">
                        <span className="card-title">{movie.title}</span>
                        <span className="card-rating">{movie.vote_average}</span>
                    </div>
                    <div className="card-text">Popularity: <span>{movie.popularity}</span></div>
                    <div className="card-text">Hits: <span>{movie.vote_count}</span></div>
                    <div className="card-text" style={{ textTransform: 'capitalize' }}>
                        Language: <span>{movie.original_language}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Movies;
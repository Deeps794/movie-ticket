import React from 'react';
import { withRouter } from 'react-router-dom';

import { HindiMovies } from '../../data/Movies/HindiMovies';
import { PopularMovies } from '../../data/Movies/PopularMovies';
import { TamilMovies } from '../../data/Movies/TamilMovies';
import MovieCard from './MovieCard';

function Main(props) {
    return (
        <React.Fragment>
            <div className="row">
                <div className="card-group-title">Popular</div>
            </div>
            <div className="row card-wrap ">
                {getMovieCards(PopularMovies, 'Popular', props)}
            </div>
            <div className="row">
                <div className="card-group-title">Hindi</div>
            </div>
            <div className="row card-wrap ">
                {getMovieCards(HindiMovies, 'Hindi', props)}
            </div>
            <div className="row">
                <div className="card-group-title">Tamil</div>
            </div>
            <div className="row card-wrap ">
                {getMovieCards(TamilMovies, 'Tamil', props)}
            </div>
        </React.Fragment>
    );
}

function getMovieCards(movies, path, props) {
    return movies.map((movie, i) =>
        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12 col-12" key={i} onClick={() => routeToMovie(movie, props)}>
            <MovieCard movie={movie} path={path} />
        </div>
    );
}

function routeToMovie(movie, props) {
    props.history.push('/movie/' + movie.movieId);
}

export default withRouter(Main);
import './Main.css';

import * as SVG from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { getData } from '../../Services/bo.http.service';
import MovieCard from '../Movies/Movie-Card/MovieCard';
import { Banner } from './Banner/Banner';


export class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            playingMovies: [],
            popularMovies: [],
            topRatedMovies: []
        };
    }

    componentDidMount() {
        this.getNowPlayingMovies();
        this.getPopularMovies();
        this.getTopRatedMovies();
    }

    render() {
        return (
            <React.Fragment>
                <Banner />
                <div className="row">
                    <div className="card-group-title">
                        Now Playing
                    <span onClick={() => this.routeToMovies({ name: 'Now Playing', value: 'now_playing' }, this.props)}>Show All</span>
                    </div>
                </div>
                <div className="row card-wrap ">
                    <div className="col">
                        <div className="movie-section">
                            <FontAwesomeIcon className="left-arrow position-absolute h-100"
                                icon={SVG.faArrowLeft} size="2x" color="white" />
                            <FontAwesomeIcon className="right-arrow position-absolute h-100"
                                icon={SVG.faArrowRight} size="2x" color="white" />
                            <div className="scroll-section">
                                {this.getMovieCards(this.state.playingMovies)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="card-group-title">
                        Popular
                    <span onClick={() => this.routeToMovies({ name: 'Popular', value: 'popular' }, this.props)}>Show All</span>
                    </div>
                </div>
                <div className="row card-wrap ">
                    <div className="col">
                        <div className="movie-section">
                            <FontAwesomeIcon className="left-arrow position-absolute h-100"
                                icon={SVG.faArrowLeft} size="2x" color="white" />
                            <FontAwesomeIcon className="right-arrow position-absolute h-100"
                                icon={SVG.faArrowRight} size="2x" color="white" />
                            <div className="scroll-section">
                                {this.getMovieCards(this.state.popularMovies)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="card-group-title">
                        Top Rated
                    <span onClick={() => this.routeToMovies({ name: 'Top Rated', value: 'top_rated' }, this.props)}>Show All</span>
                    </div>
                </div>
                <div className="row card-wrap ">
                    <div className="col">
                        <div className="movie-section">
                            <FontAwesomeIcon className="left-arrow position-absolute h-100"
                                icon={SVG.faArrowLeft} size="2x" color="white" />
                            <FontAwesomeIcon className="right-arrow position-absolute h-100"
                                icon={SVG.faArrowRight} size="2x" color="white" />
                            <div className="scroll-section">
                                {this.getMovieCards(this.state.topRatedMovies)}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    getNowPlayingMovies() {
        return getData("movie/now_playing").then((response) => {
            this.setState({ playingMovies: response.data.results.splice(0, 8) });
        });
    }

    getPopularMovies() {
        return getData("movie/popular").then((response) => {
            this.setState({ popularMovies: response.data.results.splice(0, 7) });
        });
    }

    getTopRatedMovies() {
        return getData("movie/top_rated").then((response) => {
            this.setState({ topRatedMovies: response.data.results.splice(0, 7) });
        });
    }

    getMovieCards(movies) {
        return movies.map((movie, i) => (
            <div key={movie.id} onClick={() => this.routeToMovie(movie, this.props)}>
                <MovieCard movie={movie} />
            </div>

        ));
    }

    routeToMovies(type, props) {
        props.history.push({
            pathname: '/movies',
            state: type
        });
    }

    routeToMovie(movie, props) {
        props.history.push('/movie/' + movie.id);
    }
}

export default withRouter(Main);

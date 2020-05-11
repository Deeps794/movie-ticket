import './Main.css';

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

        // this.routeToMovies = this.routeToMovies.bind(this);
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
                    <span onClick={() => this.routeToMovies('now_playing', this.props)}>Show All</span>
                    </div>
                </div>
                <div className="row card-wrap ">
                    {this.getMovieCards(this.state.playingMovies)}
                </div>
                <div className="row">
                    <div className="card-group-title">
                        Popular
                    <span onClick={() => this.routeToMovies('popular', this.props)}>Show All</span>
                    </div>
                </div>
                <div className="row card-wrap ">
                    {this.getMovieCards(this.state.popularMovies)}
                </div>
                <div className="row">
                    <div className="card-group-title">
                        Top Rated
                    <span onClick={() => this.routeToMovies('top_rated', this.props)}>Show All</span>
                    </div>
                </div>
                <div className="row card-wrap ">
                    {this.getMovieCards(this.state.topRatedMovies)}
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
            <div
                className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12"
                key={i}
                onClick={() => this.routeToMovie(movie, this.props)}
            >
                <MovieCard movie={movie} key={movie.id} />
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

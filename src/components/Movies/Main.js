import React from 'react';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { getData } from '../../services/bo.http.service';
import MovieCard from './MovieCard';
import { PopularMovies } from '../../data/Movies/PopularMovies';
import Footer from '../Core/Footer';

export class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            playingMovies: []
        }
    }

    componentDidMount() {
        this.getNowPlayingMovies();
    }

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="card-group-title">Now Playing</div>
                </div>
                <div className="row card-wrap ">
                    {this.getMovieCards(this.state.playingMovies)}
                </div>
            </React.Fragment>
        );
    }

    getNowPlayingMovies() {
        return getData('movie/now_playing').then(response => {
            this.setState({ playingMovies: response.data.results });
        });
    }

    getMovieCards(movies) {
        return movies.map((movie, i) =>
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12" key={i}
                onClick={() => this.routeToMovie(movie, this.props)}>
                <MovieCard movie={movie} key={movie.id} />
            </div>

        );
    }

    routeToMovie(movie, props) {
        props.history.push('/movie/' + movie.id);
    }

}

export default withRouter(Main);

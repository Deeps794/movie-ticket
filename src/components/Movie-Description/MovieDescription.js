import './MovieDescription.css';

import * as SVG from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { HindiMovies } from '../../data/Movies/HindiMovies';
import { PopularMovies } from '../../data/Movies/PopularMovies';
import { TamilMovies } from '../../data/Movies/TamilMovies';
import SeatAllot from '../Seats/SeatAllot';

export class MovieDescription extends Component {
    movies = PopularMovies.concat(TamilMovies, HindiMovies);

    constructor(props) {
        super(props);
        this.state = {
            movie: { cast: [] },
            bookedSeats: 0
        }
    }

    componentDidMount() {
        this.setMovieDescription();
    }

    render() {
        return (
            <div className="description-banner">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                        <div className="card">
                            <img className="card-img-banner" src="https://images.wallpapersden.com/image/download/no-time-to-die-banner-8k_69867_1366x768.jpg" alt="Banner card" />
                            <div className="card-body">
                                <h5 className="card-title">Kannum Kannum Kollaiyadithal</h5>
                                <div className="card-text">
                                    <span>Cast</span>
                                    <ul>
                                        {
                                            this.state.movie?.cast.map((castActor, index) =>
                                                <li key={index}>{castActor}</li>
                                            )
                                        }
                                    </ul>
                                </div>
                                <button className="btn-trailer">
                                    <FontAwesomeIcon icon={SVG.faVideo} size="1x" ></FontAwesomeIcon>
                            Watch Trailer</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-8 col-md-8 col-12">
                        <div className="movie-button-wrap">
                            <div className="btn-group">
                                <button type="button" className="btn btn-booking dropdown-toggle btn-movie" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Choose a theatre
                            </button>
                                <div className="dropdown-menu w-100 my-2">
                                    <span className="dropdown-item" >Action</span>
                                    <span className="dropdown-item" >Another action</span>
                                    <span className="dropdown-item" >Something else here</span>
                                    <div className="dropdown-divider"></div>
                                    <span className="dropdown-item" >Separated link</span>
                                </div>
                            </div>
                            <div className="btn-group">
                                <button type="button" className="btn btn-booking dropdown-toggle btn-movie" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Pick a date
                            </button>
                                <div className="dropdown-menu w-100 my-2">
                                    <span className="dropdown-item" >Action</span>
                                    <span className="dropdown-item" >Another action</span>
                                    <span className="dropdown-item" >Something else here</span>
                                    <div className="dropdown-divider"></div>
                                    <span className="dropdown-item" >Separated link</span>
                                </div>
                            </div>
                            <div className="btn-group">
                                <button type="button" className="btn btn-booking dropdown-toggle btn-movie" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Select the time
                        </button>
                                <div className="dropdown-menu w-100 my-2">
                                    <span className="dropdown-item" >Action</span>
                                    <span className="dropdown-item" >Another action</span>
                                    <span className="dropdown-item" >Something else here</span>
                                    <div className="dropdown-divider"></div>
                                    <span className="dropdown-item" >Separated link</span>
                                </div>
                            </div>
                        </div>
                        <div className="seat-wrap my-4">
                            <SeatAllot />
                        </div>
                        <div className="checkout-wrap">
                            <div className="d-inline-block checkout-item">
                                Tickets<br />
                                <span>3</span>
                            </div>
                            <div className="d-inline-block checkout-item">
                                Price<br />
                                <span>₹ 243.20</span>
                            </div>
                            <button className="btn btn-primary btn-checkout" onClick={this.showBookedTickets}>
                                Checkout </button>
                        </div>
                    </div>
                </div >
            </div>

        );
    }

    setMovieDescription() {
        const movieId = this.props.match.params.movieId;
        const movie = this.movies.find(movie => movie.movieId === movieId);
        this.setState({
            movie: movie
        });
    }
}



export default withRouter(MovieDescription);
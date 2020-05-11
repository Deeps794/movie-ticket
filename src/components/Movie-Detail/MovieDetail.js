import "./MovieDetail.css";

import * as SVG from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { IMAGE } from "../../Axios/ImageApi";
import { getData } from "../../Services/bo.http.service";
import Seats from "./Seats/Seats";

export class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {},
            poster_path: "",
            bookedSeats: 0,
        };
    }

    componentDidMount() {
        this.setMovieDescription();
    }

    render() {
        return (
                <div className="description">
                    <div className="row">
                        <div className="col">
                            <div className="seat-wrap">
                                <div className="card">
                                    <img
                                        className="card-img-banner"
                                        src={this.state.poster_path}
                                        alt="Banner card"
                                    />
                                    <div className="card-body">
                                        <h6 className="card-title">{this.state.movie.title}</h6>
                                        <div className="movie-add-ons w-100">
                                            <div className="add-on-item">
                                                <span>Popularity</span>
                                                <span>{this.state.movie.popularity}</span>
                                            </div>
                                            <div className="add-on-item">
                                                <span>Votes Count</span>
                                                <span>{this.state.movie.vote_count}</span>
                                            </div>
                                            <div className="add-on-item">
                                                <span>Average Rating</span>
                                                <span>{this.state.movie.vote_average}</span>
                                            </div>
                                        </div>
                                        <button className="btn-trailer">
                                            <FontAwesomeIcon
                                                icon={SVG.faVideo}
                                                size="1x"
                                            ></FontAwesomeIcon>
                                        Watch Trailer
                                    </button>
                                    </div>
                                </div>
                                <div className="seat-layout">
                                    <div className="movie-button-wrap">
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-booking dropdown-toggle btn-movie"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                Choose a theatre
                                    </button>
                                            <div className="dropdown-menu w-100 my-2">
                                                <span className="dropdown-item">Kings Theatre</span>
                                                <span className="dropdown-item">RadioCity Music Hall</span>
                                                <span className="dropdown-item">Fox Threatre</span>
                                                <span className="dropdown-item">Orchestra Hall</span>
                                                <span className="dropdown-item">Kauffman Centre</span>
                                            </div>
                                        </div>
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-booking dropdown-toggle btn-movie"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                Pick a date
                                    </button>
                                            <div className="dropdown-menu w-100 my-2">
                                                <span className="dropdown-item">11:30 AM</span>
                                                <span className="dropdown-item">3:00 PM</span>
                                                <span className="dropdown-item">6:30 PM</span>
                                                <span className="dropdown-item">10:00 PM</span>
                                            </div>
                                        </div>
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-booking dropdown-toggle btn-movie"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                Select the time
                                    </button>
                                            <div className="dropdown-menu w-100 my-2">
                                                <span className="dropdown-item">11:30 AM</span>
                                                <span className="dropdown-item">3:00 PM</span>
                                                <span className="dropdown-item">6:30 PM</span>
                                                <span className="dropdown-item">10:00 PM</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="screen">
                                        SCREEN
                                    </div>
                                    <Seats />
                                </div>
                                <div>
                                    <table className="checkout-table">
                                        <tbody>
                                            <tr>
                                                <td colSpan="2">
                                                    <span className="py-2">Seats</span>
                                                    <div className="booked-seat">
                                                        <div className="seat-booked-number">
                                                            <FontAwesomeIcon className="m-1" icon={SVG.faSquareFull} size="2x" color="#4f4d7c" />
                                                            <span className="position-absolute">A1</span>
                                                        </div>
                                                        <div className="seat-booked-number">
                                                            <FontAwesomeIcon className="m-1" icon={SVG.faSquareFull} size="2x" color="#4f4d7c" />
                                                            <span className="position-absolute">C1</span>
                                                        </div>
                                                        <div className="seat-booked-number">
                                                            <FontAwesomeIcon className="m-1" icon={SVG.faSquareFull} size="2x" color="#4f4d7c" />
                                                            <span className="position-absolute">F5</span>
                                                        </div>
                                                        <div className="seat-booked-number">
                                                            <FontAwesomeIcon className="m-1" icon={SVG.faSquareFull} size="2x" color="#4f4d7c" />
                                                            <span className="position-absolute">F2</span>
                                                        </div>
                                                        <div className="seat-booked-number">
                                                            <FontAwesomeIcon className="m-1" icon={SVG.faSquareFull} size="2x" color="#4f4d7c" />
                                                            <span className="position-absolute">F1</span>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Tickets</td>
                                                <td>3</td>
                                            </tr>
                                            <tr>
                                                <td>Price</td>
                                                <td>$36</td>
                                            </tr>
                                            <tr>
                                                <td colSpan="2">
                                                    <button className="btn-trailer">
                                                        <FontAwesomeIcon
                                                            icon={SVG.faTicketAlt}
                                                            size="1x"
                                                        ></FontAwesomeIcon>
                                            Checkout
                                        </button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
        );
    }

    setMovieDescription() {
        const movieId = this.props.match.params.movieId;
        getData("movie/" + movieId).then((response) => {
            this.setState({ movie: response.data });
            this.setPosterPath(this.state.movie.poster_path);
        });
    }

    setPosterPath(poster_path) {
        if (poster_path) {
            this.setState({
                poster_path: IMAGE.BASE_URL + IMAGE.POSTER_SIZE + poster_path,
            });
        }
    }
}

export default withRouter(MovieDetail);

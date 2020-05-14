import "./MovieDetail.css";

import * as SVG from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { IMAGE } from "../../Axios/ImageApi";
import { getData } from "../../Services/bo.http.service";
import Seats from "./Seats/Seats";

export class MovieDetail extends Component {
    maxTicketCount = 5;
    constructor(props) {
        super(props);
        this.state = {
            movie: {},
            poster_path: '',
            bookSeats: [],
            bookTicketCount: 0
        };

        this.toggleBookedStatus = this.toggleBookedStatus.bind(this);
    }

    componentDidMount() {
        this.setMovieDescription();
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="description">
                <div className="row">
                    <div className="col offset-sm-2">
                        <div className="bo-movie-title d-flex mt-4">
                            <div className="circle-wrap">
                                <span className="position-absolute">{this.state.movie.vote_average}</span>
                                <svg height="50" width="50" style={{ transform: 'rotate(270deg)' }} >
                                    <circle className="circle" cx="25" cy="25" r="20"
                                        style={{ strokeDashoffset: this.state.movie.vote_average ? (10 - this.state.movie.vote_average) * 10 : 0 }}
                                        stroke="#ffea00" strokeWidth="3" />
                                </svg>
                            </div>
                            <div className="title-wrap m-2">
                                <h3 className="m-0">{this.state.movie.title}</h3>
                                <span style={{ fontSize: '10px' }}>{this.state.movie.runtime} MIN</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="bo-book-show mx-4 mb-4">
                            <div className="bo-movie-poster mx-4">
                                <img className="card-img-banner h-100 w-100" src={this.state.poster_path} alt="Banner card" />
                            </div>
                            <div className="bo-wrap">
                                <div className="bo-dropdown m-4">
                                    <span>CITY</span>
                                    <div className="dropdown">
                                        <button
                                            type="button"
                                            className="btn btn-booking dropdown-toggle btn-movie"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            chennai
                                    </button>
                                        <div className="dropdown-menu w-100 my-2">
                                            <span className="dropdown-item">Kings Theatre</span>
                                            <span className="dropdown-item">RadioCity Music Hall</span>
                                            <span className="dropdown-item">Fox Threatre</span>
                                            <span className="dropdown-item">Orchestra Hall</span>
                                            <span className="dropdown-item">Kauffman Centre</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bo-date-chooser m-4">
                                    <span>MONDAY 14, NOVEMBER</span>
                                    <div className="text-center d-flex">
                                        <div className="date-item p-2">
                                            <span>Today</span>
                                            <div className="position-relative">
                                                <span>13</span>
                                                <FontAwesomeIcon icon={SVG.faCircle} size="3x" color="#FFEA00" />
                                            </div>
                                        </div>
                                        <div className="date-item p-2">
                                            <span>tue</span>
                                            <div className="position-relative">
                                                <span>14</span>
                                                <FontAwesomeIcon icon={SVG.faCircle} size="3x" color="#212529" />
                                            </div>
                                        </div>
                                        <div className="date-item p-2">
                                            <span>wed</span>
                                            <div className="position-relative">
                                                <span>15</span>
                                                <FontAwesomeIcon icon={SVG.faCircle} size="3x" color="#212529" />
                                            </div>
                                        </div>
                                        <div className="date-item p-2">
                                            <span>thu</span>
                                            <div className="position-relative">
                                                <span>16</span>
                                                <FontAwesomeIcon icon={SVG.faCircle} size="3x" color="#212529" />
                                            </div>
                                        </div>
                                        <div className="date-item p-2">
                                            <span>fri</span>
                                            <div className="position-relative">
                                                <span>17</span>
                                                <FontAwesomeIcon icon={SVG.faCircle} size="3x" color="#212529" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bo-wrap">
                                <div className="bo-dropdown m-4">
                                    <span>THEATRE</span>
                                    <div className="dropdown">
                                        <button
                                            type="button"
                                            className="btn btn-booking dropdown-toggle btn-movie"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            LUX cinemas
                                    </button>
                                        <div className="dropdown-menu w-100 my-2">
                                            <span className="dropdown-item">Kings Theatre</span>
                                            <span className="dropdown-item">RadioCity Music Hall</span>
                                            <span className="dropdown-item">Fox Threatre</span>
                                            <span className="dropdown-item">Orchestra Hall</span>
                                            <span className="dropdown-item">Kauffman Centre</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bo-time-chooser m-4">
                                    <span>TIME</span>
                                    <div>
                                        <span>11:00</span>
                                        <span className="active">11:45</span>
                                        <span>13:00</span>
                                        <span>15:45</span>
                                    </div>
                                    <div>
                                        <span>17:00</span>
                                        <span>17:45</span>
                                        <span>22:00</span>
                                        <span>22:50</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="bo-seat-layout">
                            <div className="m-4">PICK YOUR SEAT
                                <FontAwesomeIcon icon={SVG.faMinus} className="mx-4" size="1x" color="whitesmoke" />
                                <span className="ticket-count">2</span>
                                <FontAwesomeIcon icon={SVG.faPlus} className="mx-4" size="1x" color="whitesmoke" />
                            </div>
                            <div className="screen">SCREEN</div>
                            <Seats bookSeats={this.state.bookSeats} ontoggleBook={this.toggleBookedStatus} />
                            <div className="d-flex m-3">
                                <button className="btn-proceed">Proceed
                                        <FontAwesomeIcon icon={SVG.faArrowAltCircleRight} size="1x" className="mx-2"
                                        style={{ position: 'relative', top: '1px' }} ></FontAwesomeIcon>
                                </button>
                                <div className="price">
                                    <span style={{ fontSize: '9px', fontWeight: 'bold' }}>Total</span>
                                    <span style={{ fontSize: '1.4em' }}>
                                        <span style={{ fontSize: '.5em', verticalAlign: 'text-top', padding: '.1em' }}>$</span>
                                        25.32
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

    toggleBookedStatus(seatNumber) {
        const bookSeats = this.state.bookSeats.includes(seatNumber) ?
            this.removeSeatFromBookedTickets(seatNumber) : this.addSeatToBookedTickets(seatNumber);
        this.setState({
            bookSeats: bookSeats
        });
    }

    addSeatToBookedTickets(seatNumber) {
        const bookSeats = this.state.bookSeats;
        bookSeats.push(seatNumber);
        return bookSeats;
    }

    removeSeatFromBookedTickets(seatNumber) {
        const bookSeats = this.state.bookSeats;
        const index = bookSeats.findIndex(existingSeat => existingSeat === seatNumber);
        if (index > -1) {
            bookSeats.splice(index, 1);
        }
        return bookSeats;
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

    routeToPayment() {
        this.props.history.push('/payment');
    }
}

export default withRouter(MovieDetail);

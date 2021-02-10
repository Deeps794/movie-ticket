import '../../../App.scss';
import './MovieCard.css';

import * as SVG from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

import { IMAGE } from '../../../axios/ImageApi';

export class MovieCard extends Component {

    render() {
        return (
            <div className="card mx-2" style={{ minWidth: '310px' }}>
                <div className="position-relative">
                    <img className="card-img-top" src={IMAGE.BASE_URL + IMAGE.POSTER_SIZE + this.props.movie.poster_path} alt="Card cap" />
                    <div className="card-body p-0 movie-card" style={{ color: 'black' }}>
                        <span className="card-title m-2 font-weight-bold">{this.props.movie.title}</span>
                        <div className="movie-add-ons">
                            <div className="add-on-item">
                                <span>Popularity</span>
                                <span>{this.props.movie.popularity}</span>
                            </div>
                            <div className="add-on-item">
                                <span>Votes</span>
                                <span>{this.props.movie.vote_count}</span>
                            </div>
                            <div className="add-on-item">
                                <span>Rating </span>
                                <span>{this.props.movie.vote_average}</span>
                            </div>
                            <div className="add-on-item">
                                <span>Release Date </span>
                                <span>{this.props.movie.release_date}</span>
                            </div>
                        </div>
                        <button className="my-2 btn btn-bookTicket">Book Now
                                    <FontAwesomeIcon icon={SVG.faArrowAltCircleRight} size="1x" className="mx-2"
                                style={{ position: 'relative', top: '1px' }} ></FontAwesomeIcon>
                        </button>
                    </div>
                </div>

                <div className="card-footer">
                    <span>{this.props.movie.title}</span>
                    <span>
                        <FontAwesomeIcon icon={SVG.faHeart} color="#FFEA00" size="1x" ></FontAwesomeIcon>
                        &nbsp;&nbsp;
                        {this.props.movie.vote_average}
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        ( {this.props.movie.vote_count} )
                    </span>
                </div>
            </div>
        );
    }
}

export default MovieCard;
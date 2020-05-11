import '../../../App.css';
import './MovieCard.css';

import * as SVG from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

import { IMAGE } from '../../../Axios/ImageApi';

export class MovieCard extends Component {

    render() {
        return (
            <div className="card">
                <img className="card-img-top" src={IMAGE.BASE_URL + IMAGE.POSTER_SIZE + this.props.movie.poster_path} alt="Card cap" />
                <div className="card-body p-0 movie-card">
                    <span className="card-title m-2">{this.props.movie.title}</span>
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
                </div>
                <div className="card-footer">
                    <span>{this.props.movie.title}</span>
                    <span>
                        <FontAwesomeIcon icon={SVG.faHeart} color="#ff304f" size="1x" ></FontAwesomeIcon>
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
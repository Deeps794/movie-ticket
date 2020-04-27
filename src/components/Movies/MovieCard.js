import '../../App.css';

import * as SVG from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { getData } from '../../services/bo.image.http.service';
import { IMAGE } from '../../axios/ImageApi';

export class MovieCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card" style={{ height: '60vh' }}>
                <img className="card-img-top h-100" src={IMAGE.BASE_URL + IMAGE.POSTER_SIZE + this.props.movie.poster_path} alt="Card cap" />
                <div className="card-body p-0 movie-card">
                    <span className="card-title my-0">{this.props.movie.title}</span>
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
                    </div>
                </div>
                <div className="card-footer">
                    <span>{this.props.movie.title}</span>

                </div>
            </div>
        );
    }
}

export default MovieCard;
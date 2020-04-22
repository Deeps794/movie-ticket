import '../../App.css';

import * as SVG from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { getData } from '../../services/bo.image.http.service';
import { IMAGE } from '../../axios/ImageApi';

export class MovieCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            favorite: false,
            imageUrl: '',
            cast: []
        }
    }

    render() {
        return (
            <div className="card">
                <img className="card-img-top" src={IMAGE.BASE_URL + IMAGE.POSTER_SIZE + this.props.movie.poster_path} alt="Card cap" />
                <div className="card-body p-2 movie-card">
                    <h5 className="card-title my-0 d-inline-block">{this.props.movie.title}</h5>
                    <span className="position-absolute my-3" style={{ right: '10px', float: 'right', top: '0px' }}
                        onMouseOver={() => this.setState({ favorite: !this.state.favorite })}>
                        <FontAwesomeIcon icon={SVG.faHeart} color={this.state.favorite ? '#ff304f' : 'gray'}></FontAwesomeIcon>
                    </span>
                    <p className="card-text" style={{ fontSize: '12px' }}>
                        <span style={{ color: '#ff304f', fontWeight: 'bold' }}>Staring</span>
                        {
                            this.state.cast.map((castActor, index) =>
                                <span key={index}> {castActor}, </span>
                            )
                        }
                    </p>
                </div>
            </div>
        );
    }
}

export default MovieCard;
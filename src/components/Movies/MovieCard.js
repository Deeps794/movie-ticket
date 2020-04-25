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
            <div className="card" style={{height: '60vh'}}>
                <img className="card-img-top h-100" src={IMAGE.BASE_URL + IMAGE.POSTER_SIZE + this.props.movie.poster_path} alt="Card cap" />
                <div className="card-body p-0 movie-card">
                    <span className="card-title my-0">{this.props.movie.title}</span>
                    {/* <span className="position-absolute my-3" style={{ right: '10px', float: 'right', top: '0px' }}
                        onMouseOver={() => this.setState({ favorite: !this.state.favorite })}>
                        <FontAwesomeIcon icon={SVG.faHeart} color={this.state.favorite ? '#ff304f' : 'gray'}></FontAwesomeIcon>
                    </span> */}
                </div>
            </div>
        );
    }
}

export default MovieCard;
import * as SVG from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import { getData } from '../../../Services/bo.http.service';
import { IMAGE } from '../../../Axios/ImageApi';

export function Banner(props) {

    const [banner, setBanner] = useState({
        title: '',
        overview: '',
        bannerUrl: ''
    });

    const [genres, setGenres] = useState([]);

    useEffect(() => {
        getData('movie/upcoming').then(response => {
            const movies = response.data.results;
            const movieDetails = movies[Math.floor(Math.random() * movies.length)];
            setBanner({
                title: movieDetails.title,
                overview: movieDetails.overview,
                bannerUrl: 'url(' + IMAGE.BASE_URL + IMAGE.BACKDROP_SIZE + movieDetails.backdrop_path + ')'
            });

            getData('movie/' + movieDetails.id).then(response => {
                setGenres(response.data.genres);
            });
        });
    }, []);


    return (
        <div className="row">
            <div className="banner" style={{ backgroundImage: banner.bannerUrl }}>
                <div className="banner-card">
                    <div className="banner-title">
                        <span>{banner.title}</span>
                        {
                            genres.map(genre =>
                                <span className="banner-movie-type" key={genre.id}>{genre.name}</span>
                            )
                        }
                        <div>
                            <FontAwesomeIcon icon={SVG.faStar} color="#ff304f" size="1x" className="toggle-icon" ></FontAwesomeIcon>
                            <FontAwesomeIcon icon={SVG.faStar} color="#ff304f" size="1x" className="toggle-icon" ></FontAwesomeIcon>
                            <FontAwesomeIcon icon={SVG.faStar} color="#ff304f" size="1x" className="toggle-icon" ></FontAwesomeIcon>
                            <FontAwesomeIcon icon={SVG.faStarHalfAlt} color="#ff304f" size="1x" className="toggle-icon" ></FontAwesomeIcon>
                            <FontAwesomeIcon icon={SVG.faStar} color="#75757580" size="1x" className="toggle-icon" ></FontAwesomeIcon>
                        </div>
                    </div>
                    <span>SYNOPSIS</span>
                    <p>{banner.overview}</p>
                    <div style={{color: '#ff304f'}}>
                        <FontAwesomeIcon icon={SVG.faHeart} size="1x" className="mr-2" color="#ff304f"
                            style={{ position: 'relative', top: '1px' }} ></FontAwesomeIcon>
                    By: Cary Joji Fukunaga
                    </div>
                </div>
                <button className="btn-buy-ticket">Buy Tickets
                    <FontAwesomeIcon icon={SVG.faArrowAltCircleRight} size="1x" className="mx-2"
                        style={{ position: 'relative', top: '1px' }} ></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
}

// function routeToMovie(movieId, props) {
//     props.history.push('/movie/' + movieId);
// }

export default withRouter(Banner);


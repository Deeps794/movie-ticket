import * as SVG from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { getData } from '../../services/bo.http.service';
import { IMAGE } from '../../axios/ImageApi';

function Dashboard(props) {

    const [banner, setBanner] = useState({
        title: '',
        overview: '',
        bannerUrl: ''
    });

    useEffect(() => {
        getData('movie/457335').then(response => {
            const movieDetails = response.data;
            setBanner({
                title: movieDetails.title,
                overview: movieDetails.overview,
                bannerUrl: 'url(' + IMAGE.BASE_URL + IMAGE.BACKDROP_SIZE + movieDetails.backdrop_path + ')'
            });
        });
    });

    return (
        <div className="banner" style={{ backgroundImage: banner.bannerUrl }}>
            <div className="banner-card" style={{ maxWidth: '80%' }}>
                <div className="banner-title">
                    <h1>{banner.title}</h1>
                    <span className="banner-movie-type">Action</span>
                    <div>
                        <FontAwesomeIcon icon={SVG.faStar} color="#ff304f" size="1x" className="toggle-icon" ></FontAwesomeIcon>
                        <FontAwesomeIcon icon={SVG.faStar} color="#ff304f" size="1x" className="toggle-icon" ></FontAwesomeIcon>
                        <FontAwesomeIcon icon={SVG.faStar} color="#ff304f" size="1x" className="toggle-icon" ></FontAwesomeIcon>
                        <FontAwesomeIcon icon={SVG.faStarHalfAlt} color="#ff304f" size="1x" className="toggle-icon" ></FontAwesomeIcon>
                        <FontAwesomeIcon icon={SVG.faStar} color="#75757580" size="1x" className="toggle-icon" ></FontAwesomeIcon>
                    </div>
                </div>
                <p style={{ maxWidth: '60%' }}>{banner.overview}</p>
                <h4 style={{ color: '#ff304f' }}>By: Cary Joji Fukunaga</h4>
            </div>
            <button className="btn-buy-ticket">Buy Tickets
            <FontAwesomeIcon icon={SVG.faArrowAltCircleRight} size="1x" className="mx-2"
                    style={{ position: 'relative', top: '1px' }} ></FontAwesomeIcon>
            </button>
        </div>
    );
}

function getBannerCard(banners, props) {
    return banners.map((banner, i) =>
        <div className={i === 0 ? 'carousel-item active' : 'carousel-item'} key={i} onClick={() => routeToMovie(banner, props)}>
            <img className="d-block w-100" src={'images/banner/' + banner + '.jpg'} alt="slide" />
        </div>
    );
}

function routeToMovie(movieId, props) {
    props.history.push('/movie/' + movieId);
}

export default withRouter(Dashboard);


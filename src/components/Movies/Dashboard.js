import * as SVG from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { withRouter } from 'react-router-dom';

function Dashboard(props) {
    const banner = ['M7741', 'M1120', 'M5020', 'M3341', 'M2249'];
    return (
        <div className="banner">
            <div className="banner-card" style={{ maxWidth: '80%' }}>
                <div className="banner-title">
                    <h1>No Time to Die</h1>
                    <span className="banner-movie-type">Action</span>
                    <div>
                        <FontAwesomeIcon icon={SVG.faStar} color="#ff304f" size="1x" className="toggle-icon" ></FontAwesomeIcon>
                        <FontAwesomeIcon icon={SVG.faStar} color="#ff304f" size="1x" className="toggle-icon" ></FontAwesomeIcon>
                        <FontAwesomeIcon icon={SVG.faStar} color="#ff304f" size="1x" className="toggle-icon" ></FontAwesomeIcon>
                        <FontAwesomeIcon icon={SVG.faStarHalfAlt} color="#ff304f" size="1x" className="toggle-icon" ></FontAwesomeIcon>
                        <FontAwesomeIcon icon={SVG.faStar} color="#75757580" size="1x" className="toggle-icon" ></FontAwesomeIcon>
                    </div>
                </div>
                <p style={{ maxWidth: '60%' }}>No Time to Die is a forthcoming spy film and the twenty-fifth instalment in the
                James Bond film series produced by Eon Productions. It features Daniel Craig in his
            fifth and final outing as the fictional MI6 agent James Bond</p>
                <h4 style={{ color: '#ff304f' }}>By: Cary Joji Fukunaga</h4>
            </div>
            <button className="btn-buy-ticket">Buy Tickets
            <FontAwesomeIcon icon={SVG.faArrowAltCircleRight} size="1x" className="mx-2"
                style={{position: 'relative', top: '1px'}} ></FontAwesomeIcon>
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


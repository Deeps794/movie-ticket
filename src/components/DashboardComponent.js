import React from 'react';
import { withRouter } from 'react-router-dom';

function Dashboard(props) {
    const banner = ['BadBoys', 'Darbar', 'GentleMan', 'Psycho'];
    return (
        <div className="position-relative">
            <div id="carouselExampleControls" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    {getBannerCard(banner, props)}
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
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


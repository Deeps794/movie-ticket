import React from 'react';
import { withRouter } from 'react-router-dom';

import MovieCard from './MovieCard';

function Main(props) {
    const popular = ['Darbar', '1917', 'BadBoys', 'BirdsOfPrey', 'Tanhaji', 'VaanamKottatum', 'DoLittle', 'StreetDancer3', 'Hacked', 'GentleMan'];
    const hindi = ['Panga', 'Hacked', 'StreetDancer3', 'Malang', 'Shikara']
    const tamil = ['Darbar', 'Dakalti', 'Pattas', 'Psycho', 'Seeru', 'VaanamKottatum'];

    return (
        <React.Fragment>
            <div className="row">
                <div className="card-group-title">Popular</div>
            </div>
            <div className="row card-wrap ">
                {getMovieCards(popular, props)}
            </div>
            <div className="row">
                <div className="card-group-title">Hindi</div>
            </div>
            <div className="row card-wrap ">
                {getMovieCards(hindi, props)}
            </div>
            <div className="row">
                <div className="card-group-title">Tamil</div>
            </div>
            <div className="row card-wrap ">
                {getMovieCards(tamil, props)}
            </div>
        </React.Fragment>
    );
}

function getMovieCards(cardCount, props) {
    const cards = cardCount.map((card, i) =>
        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12 col-12" key={i} onClick={() => routeToMovie(card, props)}>
            <MovieCard movieId={card} />
        </div>
    );
    return cards;
}

function routeToMovie(movieId, props) {
    props.history.push('/movie/' + movieId);
}

export default withRouter(Main);
import '../Banner/Banner.css';

import * as SVG from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import { IMAGE } from '../../../axios/ImageApi';
import { getData } from '../../../services/bo.http.service';

export function Banner(props) {

    const [banner, setBanner] = useState({
        title: '',
        overview: '',
        bannerUrl: '',
        movieId: ''
    });

    const [genres, setGenres] = useState([]);
    const [runtime, setRuntime] = useState(0);
    const [language, setLanguage] = useState('');

    useEffect(() => {
        getData('movie/upcoming').then(response => {
            const movies = response.data.results;
            const movieDetails = movies[Math.floor(Math.random() * movies.length)];
            setBanner({
                title: movieDetails.title,
                overview: movieDetails.overview,
                bannerUrl: 'url(' + IMAGE.BASE_URL + IMAGE.BACKDROP_SIZE + movieDetails.backdrop_path + ')',
                movieId: movieDetails.id
            });

            getData('movie/' + movieDetails.id).then(response => {
                setLanguage(response.data.original_language);
                setRuntime(response.data.runtime);
                setGenres(response.data.genres);
            });
        });
    }, []);


    return (
        <div className="row">
            <div className="banner" style={{ backgroundImage: banner.bannerUrl }}>
                <div className="banner-card">
                    <div>
                        <span>{Math.floor(runtime / 60) + 'hr'} &nbsp; {(runtime % 60) + 'min'}</span>
                        <div style={{
                            display: 'inline-block',
                            padding: '0px 10px 0px 30px',
                            color: '#888787'
                        }}>
                            {
                                genres.map((genre, index) =>
                                    <span key={genre.id}>{genre.name} {index !== genres.length - 1 ? ',' : ''}</span>
                                )
                            }
                        </div>
                        <span className="banner-movie-type">{language.toUpperCase()}</span>
                    </div>
                    <div className="banner-title">{banner.title}
                    </div>
                    <button className="btn-buy-ticket" onClick={() => routeToMovie(banner.movieId, props)}>Buy Tickets
                        <FontAwesomeIcon icon={SVG.faArrowAltCircleRight} size="1x" className="mx-2"
                            style={{ position: 'relative', top: '1px' }} ></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
}

function routeToMovie(movieId, props) {
    props.push('/movie/' + movieId);
}

export default withRouter(Banner);


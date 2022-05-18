import * as SVG from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { IMAGE } from '../../../axios/ImageApi';
import { getData } from '../../../services/bo.http.service';
import '../Banner/Banner.css';

export function Banner(props) {

    const [banner, setBanner] = useState([]);

    useEffect(() => {
        const getBanner = () => {
            getData('movie/upcoming').then(response => {
                const movies = response.data.results;
                console.log(movies);
                return movies.map(movie => {
                    const bannerItem = {
                        title: movie.title,
                        overview: movie.overview,
                        bannerUrl: 'url(' + IMAGE.BASE_URL + IMAGE.BACKDROP_SIZE + movie.backdrop_path + ')',
                        movieId: movie.id,
                        genres: [],
                        runTime: 0,
                        language: ''
                    }
                    setBannerInfoDetails(bannerItem);
                    return movie;
                });
            });
        }
        getBanner();
    }, []);

    const setBannerInfoDetails = (bannerItem) => {
        getData('movie/' + bannerItem.movieId).then(response => {
            bannerItem = Object.assign(bannerItem, {
                language: response.data.original_language,
                runtime: response.data.runtime,
                genres: response.data.genres
            });
            setBanner(existingBanner => [...existingBanner, bannerItem]);
        });
    }

    return (
        <div className="row">
            <div id="carouselExampleControls" className="carousel slide w-100" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {getBanners(banner, props)}
                </div>
                <div className="control-wrapper">
                    <a className="arrow" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                        <FontAwesomeIcon icon={SVG.faLongArrowAltLeft} size="1x" className="mx-2" color="white"></FontAwesomeIcon>
                    </a>
                    <a className="arrow" href="#carouselExampleControls" role="button" data-bs-slide="next">
                        <FontAwesomeIcon icon={SVG.faLongArrowAltRight} size="1x" className="mx-2" color="white"></FontAwesomeIcon>
                    </a>
                </div>
            </div>
        </div>
    );
}

function routeToMovie(movieId, props) {
    props.push('/movie/' + movieId);
}

function getBanners(banners, props) {
    return banners.map((banner, index) =>
        <div className={'carousel-item ' + (index === 0 ? 'active' : '')} key={index}>
            <div className="banner" style={{ backgroundImage: banner.bannerUrl }}>
                <div className="banner-card">
                    <div className="d-flex">
                        <span className="font-weight-bold">{Math.floor(banner.runtime / 60) + 'hr'}  {(banner.runtime % 60) + 'min'}</span>
                        <div className="px-2">
                            {
                                banner?.genres.map((genre, genreIndex) =>
                                    <span key={genre.id}>{genre.name} {genreIndex !== banner.genres.length - 1 ? ',' : ''}</span>
                                )
                            }
                        </div>
                        <span className="banner-movie-type">{banner?.language.toUpperCase()}</span>
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
export default Banner;



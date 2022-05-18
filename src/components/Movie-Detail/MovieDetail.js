import * as SVG from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IMAGE } from '../../axios/ImageApi';
import { getData } from '../../services/bo.http.service';
import './MovieDetail.scss';

function MovieDetail() {

    const maxMobileWidth = 576; // Max mobile width.

    const params = useParams();
    const navigate = useNavigate();
    const { movieId } = params;

    const [movie, setMovie] = useState({});
    const [castDetail, setCastDetail] = useState({});
    const [windowWidth, setWindowWidth] = useState(0);
    const [relatedMovies, setRelatedMovies] = useState([]);
    const [movieVideos, setMovieVideos] = useState([]);

    useEffect(() => {

        setWindowWidth(window.innerWidth);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        getData('/movie/' + movieId).then(response => {
            setMovie(response.data);
        });

        getData('/movie/' + movieId + '/credits').then(response => {
            setCastDetail(response.data);
        });

        getData('/movie/' + movieId + '/similar').then(response => {
            console.log(response.data);
            setRelatedMovies(response.data.results);
        });

        getData('/movie/' + movieId + '/videos').then(response => {
            console.log(response.data);
            setMovieVideos(response.data.results);
        });

    }, [movieId, windowWidth]);

    const getBackground = () => {
        return {
            background: 'rgba(0, 0, 0, .585) url(' + IMAGE.BASE_URL + IMAGE.BACKDROP_SIZE + movie.backdrop_path + ')',
            backgroundBlendMode: 'darken',
        }
    }

    return (
        <>
            <div className='row' style={getBackground()}>
                <div className='col-12 col-xl-4 col-lg-4 col-md-5 col-sm-12'>
                    <img src={IMAGE.BASE_URL + IMAGE.POSTER_SIZE + (windowWidth < maxMobileWidth ? movie.backdrop_path : movie.poster_path)}
                        alt="..." className='movie-banner-img w-100' style={{ maxHeight: windowWidth < maxMobileWidth ? '30vh' : 'none' }} />
                </div>
                <div className='col-12 col-xl-8 col-lg-8 col-md-7 col-sm-12'>
                    <div className='movie-info-wrapper d-flex p-4 justify-content-between align-items-baseline'>
                        <div>
                            {
                                windowWidth < maxMobileWidth ? <h2 className='fw-bolder'>{movie.title}</h2> : <h1 className='fw-bolder'>{movie.title}</h1>
                            }
                            <div className='movie-info-details'>
                                <span>{movie.release_date ? movie.release_date.split('-')[0] : '-'} &nbsp;|&nbsp;</span>
                                <span>{Math.trunc(movie.runtime / 60) + 'h' + (movie.runtime % 60) + 'min'} &nbsp;|&nbsp;</span>
                                <span className='text-capitalize'>{movie.original_language}</span>
                            </div>
                        </div>
                        <div className='d-flex align-items-center'>
                            {
                                windowWidth < maxMobileWidth ? <h2 className='mx-3 my-0'>{movie.vote_average}</h2> :
                                    <h1 className='mx-3 my-0'>{movie.vote_average}</h1>
                            }
                            <FontAwesomeIcon icon={SVG.faStar} size={windowWidth < maxMobileWidth ? '1x' : '2x'} color="#FFEE58" />
                        </div>
                    </div>
                    <ul className="nav nav-pills mb-3" id="movie-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active text-uppercase" id="overview-bar" data-bs-toggle="pill" data-bs-target="#overview-tab" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Overview</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link text-uppercase" id="details-bar" data-bs-toggle="pill" data-bs-target="#details-tab" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Details</button>
                        </li>
                    </ul>
                    <div className="tab-content py-3" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="overview-tab" role="tabpanel" aria-labelledby="pills-home-tab">
                            <p className="p-3b-0">{movie.overview}</p>
                            <div className="d-flex video-wrapper">
                                {
                                    movieVideos && movieVideos.map(video =>
                                        <iframe key={video.id} src={'https://www.youtube.com/embed/' + video.key} title={video.name}></iframe>
                                    )
                                }
                            </div>
                        </div>
                        <div className="tab-pane fade" id="details-tab" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <table className='w-100'>
                                <tbody>
                                    <tr>
                                        <td className="color-grey px-3 py-2 align-baseline">Staring</td>
                                        <td>
                                            {
                                                castDetail.cast && castDetail.cast.slice(0, 4).map(cast =>
                                                    <span key={cast.id}>{cast.name},&nbsp;</span>
                                                )
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="color-grey px-3 py-2 align-baseline">Production Companies</td>
                                        <td>
                                            {
                                                movie.production_companies && movie.production_companies.map(company =>
                                                    <span key={company.id}>{company.name}, &nbsp;</span>
                                                )
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="color-grey px-3 py-2 align-baseline">Genre</td>
                                        <td>
                                            {
                                                movie.genres && movie.genres.map(genre =>
                                                    <span key={genre.id}>{genre.name}, &nbsp;</span>
                                                )
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <h2 className="color-white fw-bold py-2">Cast Details</h2>
                <div className='d-flex flex-nowrap cast-outer-wrapper w-100'>
                    {
                        castDetail.cast && castDetail.cast.map(cast =>
                            <div className='cast-wrapper' key={cast.id}>
                                <div className="img-wrapper">
                                    <img src={IMAGE.BASE_URL + IMAGE.STILL_SIZE + cast.profile_path} alt='' className='h-100 w-100' />
                                </div>
                                <span className="color-white pt-2 d-block">{cast.name}</span>
                                <span className="color-grey">{'(' + cast.character + ')'}</span>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="row p-3">
                <h2 className="color-white fw-bold py-2">Related Movies</h2>
                {
                    relatedMovies && relatedMovies.map(relatedMovie =>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 related-movies-wrapper p-2" key={relatedMovie.id}
                            onClick={() => navigate('/movie/' + relatedMovie.id)}>
                            <div className="movie-cover-img-wrap w-100 position-relative">
                                <img src={IMAGE.BASE_URL + IMAGE.STILL_SIZE + relatedMovie.backdrop_path} alt='' className='h-100 w-100' />
                                <div className="position-absolute related-movie-name px-2 pt-4 pb-2 w-100 d-flex justify-content-between align-items-baseline">
                                    <span>{relatedMovie.title}</span>
                                    <div>
                                        <span className="mx-2">{relatedMovie.vote_average}</span>
                                        <FontAwesomeIcon icon={SVG.faStar} size='1x' color="#FFEE58"></FontAwesomeIcon>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default MovieDetail
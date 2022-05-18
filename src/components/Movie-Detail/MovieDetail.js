import * as SVG from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMAGE } from '../../axios/ImageApi';
import { getData } from '../../services/bo.http.service';
import './MovieDetail.scss';

function MovieDetail() {

    const params = useParams();
    const [movie, setMovie] = useState({});
    const [castDetail, setCastDetail] = useState({});
    const { movieId } = params;

    useEffect(() => {
        getData('/movie/' + movieId).then(response => {
            console.log(response.data);
            setMovie(response.data);
        });

        getData('/movie/' + movieId + '/credits').then(response => {
            console.log(response.data);
            setCastDetail(response.data);
        });
    }, [movieId]);

    return (
        <>
            <div className='row'>
                <div className='col'>
                    <img src={IMAGE.BASE_URL + IMAGE.POSTER_SIZE + movie.backdrop_path} alt="..." className='movie-banner-img w-100' />
                </div>
                <div className='col'>
                    <div className='movie-info-wrapper d-flex p-4 justify-content-between align-items-center'>
                        <div>
                            <h1 className='fw-bolder'>{movie.title}</h1>
                            <div className='movie-info-details'>
                                <span>{movie.release_date ? movie.release_date.split('-')[0] : '-'}</span> |
                                <span>{Math.trunc(movie.runtime / 60) + 'h' + (movie.runtime % 60) + 'min'}</span> |
                                <span className='text-uppercase'>{movie.original_language}</span>
                            </div>
                        </div>
                        <div className='d-flex align-items-center'>
                            <h1 className='mx-3 my-0'>{movie.vote_average}</h1>
                            <FontAwesomeIcon icon={SVG.faStar} size="2x" color="#FFEE58" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='d-flex flex-nowrap cast-outer-wrapper w-100 overflow-auto'>
                    {
                        castDetail.cast && castDetail.cast.map(cast =>
                            <div className='cast-wrapper' key={cast.id}>
                                <img src={IMAGE.BASE_URL + IMAGE.STILL_SIZE + cast.profile_path} alt='' className='h-100 w-100' />
                            </div>
                        )
                    }
                </div>
            </div>
        </>

    )
}

export default MovieDetail
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IMAGE } from '../../axios/ImageApi';
import { getData } from '../../services/bo.http.service';
import './Movies.scss';

const Movies = () => {

    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const movieState = 'now_playing';
        getData('movie/' + movieState).then(response => {
            console.log(response.data.results)
            if (response.data.results) {
                setMovies(response.data.results);
            }
        });
    }, []);

    const getMovies = () => {
        return movies.map(movie =>
            <div className="movies-card w-100" key={movie.id} onClick={() => navigate('/movie/' + movie.id)}>
                <div className="position-relative movie-card-img-wrapper">
                    <img src={IMAGE.BASE_URL + IMAGE.POSTER_SIZE + movie.poster_path} className="img-wrap h-100" alt="..." />
                </div>
                <div className="content-wrap position-relative h-100 p-3">
                    <div className="movie-title-wrap d-flex align-items-baseline justify-content-between">
                        <span className="movie-title">{movie.title}</span>
                        <span className="movie-rating">{movie.vote_average}</span>
                    </div>
                    <table className='w-100 movie-details mt-2'>
                        <tbody>
                            <tr>
                                <td>Popularity: </td>
                                <td><span>{movie.popularity}</span></td>
                            </tr>
                            <tr>
                                <td>Hits: </td>
                                <td><span>{movie.vote_count}</span></td>
                            </tr>
                            <tr>
                                <td>Language: </td>
                                <td><span className='text-uppercase'>{movie.original_language}</span></td>
                            </tr>
                            <tr>
                                <td>Release Date: </td>
                                <td><span>{movie.release_date}</span></td>
                            </tr>
                            <tr>
                                <td className='align-top'>Overview: </td>
                                <td><span className='overview'>{movie.overview}</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    return (
        <div className="row">
            <div className="col">
                <div className="d-flex flex-wrap movies-list my-3">
                    {getMovies()}
                </div>
            </div>
        </div>
    );
}

export default Movies;
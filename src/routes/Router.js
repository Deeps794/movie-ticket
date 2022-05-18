import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieDetail from '../components/Movie-Detail/MovieDetail';
import Movies from '../components/Movies/Movies';

export const Router = () => {

	return (
		<Routes>
			{/* <Route path="/" element={Main} ></Route>
			<Route path="/home" element={Main}></Route> */}
			<Route path="/movie/:movieId" element={<MovieDetail />}></Route>
			{/* <Route path="/payment" element={Payment}></Route> */}
			<Route path="/movies" element={<Movies />}></Route>
			{/* <Route path="/events" element={Events}></Route>
			<Route path="/shows" element={Shows}></Route>
			<Route path="/play" element={Plays}></Route>
			<Route path="*" element={Main}></Route> */}
		</Routes>
	);
}

export default Router;

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieDescription from './MovieDescription';
import App from '../App';

function Router() {
    return (

        <BrowserRouter>
            <Route path="/movie/:movieId" component={MovieDescription}></Route>
            <Route path="/" component={App} exact></Route>
            <Route path="/home" component={App}></Route>
        </BrowserRouter>
    );
}

export default Router;
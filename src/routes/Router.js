import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NotFound from '../components/404Component';
import Home from '../components/HomeComponent';
import MovieDescription from '../components/MovieDescription';
import SeatAllot from '../components/SeatAllotComponent';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact></Route>
                <Route path="/home" exact component={Home}></Route>
                <Route path="/seatAllot" exact component={SeatAllot}></Route>
                 <Route path="/movie/:movieId" exact component={MovieDescription}></Route>
                <Route path="*" component={NotFound}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
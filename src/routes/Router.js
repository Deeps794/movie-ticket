import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Events from '../Components/Events/Events';
import Main from '../Components/Main/Main';
import MovieDetail from '../Components/Movie-Detail/MovieDetail';
import Payment from '../Components/Payments/Payment';
import Plays from '../Components/Plays/Plays';
import Shows from '../Components/Shows/Shows';
import Movies from '../Components/Movies/Movie';

class Router extends React.PureComponent {

	constructor(props, context) {
		super(props, context);
		this.state = {
			prevDepth: getPathDepth(props.location)
		};
	}

	componentDidMount() {
		this.setState({ prevDepth: getPathDepth(this.props.location) });
	}

	render() {
		return (
			<Switch>
				<Route path="/" component={Main} exact></Route>
				<Route path="/home" exact component={Main}></Route>
				<Route path="/movie/:movieId" exact component={MovieDetail}></Route>
				<Route path="/payment" exact component={Payment}></Route>
				<Route path="/movies" exact component={Movies}></Route>
				<Route path="/events" exact component={Events}></Route>
				<Route path="/shows" exact component={Shows}></Route>
				<Route path="/play" exact component={Plays}></Route>
				<Route path="*" component={Main}></Route>
			</Switch>


		);
	}
}

function getPathDepth(location) {
	return (location || {}).pathname.split("/").length;
}

export default withRouter(Router);

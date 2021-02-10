import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Events from '../components/Events/Events';
import Main from '../components/Main/Main';
import MovieDetail from '../components/Movie-Detail/MovieDetail';
import Payment from '../components/Payments/Payment';
import Plays from '../components/Plays/Plays';
import Shows from '../components/Shows/Shows';
import Movies from '../components/Movies/Movie';

class Router extends React.PureComponent {

	constructor(props, context) {
		super(props);
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

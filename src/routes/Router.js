import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';

import NotFound from '../components/Error/NotFound';
import Events from '../components/Events/Events';
import MovieDescription from '../components/Movie-Description/MovieDescription';
import Home from '../components/Movies/Home';
import Payment from '../components/Payments/Payment';
import Plays from '../components/Plays/Plays';
import SeatAllot from '../components/Seats/SeatAllot';
import Shows from '../components/Shows/Shows';
import Theatre from '../components/Shows/Theatre';

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
            <Wrapper>
                <TransitionGroup className="transition-group">
                    <CSSTransition
                        key={this.props.location.pathname.split("/")[1]}
                        timeout={500}
                        classNames={
                            getPathDepth(this.props.location) - this.state.prevDepth > 0
                                ? "pageSliderRight"
                                : "pageSliderRight"
                        }
                        mountOnEnter={true}
                        unmountOnExit={true}
                    >
                        <Switch>
                            <Route path="/" component={Home} exact></Route>
                            <Route path="/home" exact component={Home}></Route>
                            <Route path="/seatAllot" exact component={SeatAllot}></Route>
                            <Route
                                path="/movie/:movieId"
                                exact
                                component={MovieDescription}
                            ></Route>
                            <Route path="/theatre" exact component={Theatre}></Route>
                            <Route path="/payment" exact component={Payment}></Route>
                            <Route path="/events" exact component={Events}></Route>
                            <Route path="/shows" exact component={Shows}></Route>
                            <Route path="/play" exact component={Plays}></Route>
                            <Route path="*" component={NotFound}></Route>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
  .pageSliderLeft-enter {
    transform: translate3d(100%, 0, 0);
  }
  .pageSliderLeft-enter.pageSliderLeft-enter-active {
    transform: translate3d(0, 0, 0);
    transition: all 600ms;
  }
  .pageSliderLeft-exit {
    transform: translate3d(0, 0, 0);
  }
  .pageSliderLeft-exit.pageSliderLeft-exit-active {
    transform: translate3d(100%, 0, 0);
    transition: all 600ms;
  }

  .pageSliderRight-enter {
    transform: translate3d(-100%, 0, 0);
  }
  .pageSliderRight-enter.pageSliderRight-enter-active {
    transform: translate3d(0, 0, 0);
    transition: all 600ms;
  }
  .pageSliderRight-exit {
    transform: translate3d(0, 0, 0);
  }
  .pageSliderRight-exit.pageSliderRight-exit-active {
    transform: translate3d(-100%, 0, 0);
    transition: all 600ms;
  }
`;

function getPathDepth(location) {
    return (location || {}).pathname.split("/").length;
}

export default withRouter(Router);

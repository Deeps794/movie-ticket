import '../Movie-Description/Reviews/Reviews.css';
import './Theatre.css';

import * as SVG from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { Theatres } from '../../data/Theatres/Theatre';

export function Theatre(props) {

    // const [theatres, setTheatres] = useState([]); // Used later for api handling.

    return (
        <div className="container">
            <div className="row review">
                <div className="col">
                    <div className="text-center pt-4" style={{color: 'white'}}><h3>Theatres</h3></div>
                    <div className="card" style={{borderRadius: '2px'}}>
                        <div className="card-body">
                            {getTheatresList(props)}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

function routeToPayment(props) {
    props.history.push('/payment');
}

function getTheatresList(props) {
    return Theatres.map(theatre =>
        <div className="card mb-3" key={theatre.theatreId}>
            <div className="row no-gutters">
                <div className="col-md-3">
                    <img src={'../images/Theatres/' + theatre.theatreId + '.jpg'} className="card-img theatre-card" alt="..." />
                </div>
                <div className="col-md-9">
                    <div className="card-body py-2 px-0">
                        <h3 className="card-title">{theatre.theatreName}</h3>
                        <p className="card-text">{theatre.description}</p>
                        {
                            theatre.showTime.map((showTime, index) =>
                                <span key={index} className="show-time text-center d-inline-block" onClick={() => routeToPayment(props)}>{showTime}</span>
                            )
                        }
                        <p className="card-text mt-3">
                            {
                                new Array(5).fill(0).map((rating, index) =>
                                    <FontAwesomeIcon key={index} icon={SVG.faStar} color={theatre.rating > index ? '#ff304f' : '#5d5d5a'} size="1x"></FontAwesomeIcon>
                                )
                            }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Theatre;
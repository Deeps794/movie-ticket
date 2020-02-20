import '../styles/Reviews.css';
import '../styles/Theatre.css';

import React from 'react';

export function Theatre(props) {
    return (
        <div className="container">
            <div className="row review">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-2 text-center">
                                    <img src="../images/casts/user-2.png" className="img img-round" alt="mins" style={{ height: '13vh' }} />
                                </div>
                                <div className="col-md-8">
                                    <div className="position-relative text-center" style={{ top: '30%' }}><h2><strong>Maniruzzaman Akash</strong></h2></div>
                                </div>
                                <div className="col-md-2">
                                    <span className="show-time" onClick={routeToPayment(props)}>04:00 PM</span>
                                    <span className="show-time" onClick={routeToPayment(props)}>09:30 PM</span>
                                </div>
                            </div>
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

export default Theatre;
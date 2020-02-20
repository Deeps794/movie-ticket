import '../styles/Reviews.css';

import * as SVG from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Reviews(props) {
    return (
        <div className="row review">
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-2 text-center">
                                <img src={'../images/casts/' + props.user + '.png'} className="img img-round" alt="mins" style={{ height: '13vh' }} />
                            </div>
                            <div className="col-md-8">
                                <div><h2><strong>Maniruzzaman Akash</strong></h2></div>
                                <p>
                                    Lorem Ipsum is simply dummy text of the pr make  but also the leap into electronic typesetting,
                                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                                    containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                                    PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                            <div className="col-md-2">
                                {
                                    new Array(5).fill(0).map((rating, index) =>
                                        <FontAwesomeIcon key={index} icon={SVG.faStar} color={props.rating > index ? '#f9aa33' : '#bcbdbf'} size="1x"></FontAwesomeIcon>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;
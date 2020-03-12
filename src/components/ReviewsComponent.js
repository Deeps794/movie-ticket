import '../styles/Reviews.css';

import * as SVG from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { Component } from 'react';

export class Reviews extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reviews: []
        };
    }

    componentDidMount() {
        this.getReviewList();
        axios.get('http://localhost:8088/reviews?movieId=' + this.props.movieId, { headers: { 'x-api-key': '3f2c60a7-99c7-410e-8397-c32acaed7c06' } }).then(response => {
            this.setState({ reviews: response.data });
            console.log(this.state.reviews);
        });
    }

    render() {
        return (
            <div className="row review">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                {this.getReviewList()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    getReviewList() {
        return (
            this.state.reviews.map(review => {
                return (
                    <React.Fragment key={review.reviewId}>
                        <div className="col-md-2 text-center">
                            <img src={'../images/casts/user-1.png'} className="img img-round" alt="mins" style={{ height: '8vh', margin: '10px 0' }} />
                        </div>
                        <div className="col-md-8" >
                            <div><h2><strong>{review.reviewerName}</strong></h2></div>
                            <p>{review.review}</p>
                        </div >
                        <div className="col-md-2">
                            {
                                new Array(5).fill(0).map((rating, index) =>
                                    <FontAwesomeIcon key={index} icon={SVG.faStar} color={review.rating > index ? '#f9aa33' : '#bcbdbf'} size="1x"></FontAwesomeIcon>
                                )
                            }
                        </div>
                    </React.Fragment>);
            }));
    }
}



export default Reviews;
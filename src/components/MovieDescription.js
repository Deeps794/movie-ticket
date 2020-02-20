import React from 'react';
import Reviews from './ReviewsComponent';
import '../styles/MovieDescription.css';
import { Link } from 'react-router-dom';

function MovieDescription() {

    return (
        // const id = this.getParams();
        <div className="container-fluid">
            <div className="row">
                <div className="position-relative w-100" style={{ opacity: '0.5' }}>
                    <img src="../images/banner/GentleMan.jpg" className="img w-100" style={{ height: '45vh' }} alt="Responsive" />
                    <img src="../images/others/play.png" alt="play" className="img position-absolute play" />
                </div>
            </div>
            <div className="row">
                <div className="card-group-title">Movie Description</div>
            </div>
            <div className="row">
                <p className="description">
                    This is a wider card with supporting text below as a natural lead-in to additional content.
                    This content is a little bit longer. This is a wider card with supporting text below as a natural
                    This content is a little bit longer
                </p>
            </div>
            <div className="row">
                <div className="card-group-title">Cast</div>
            </div>
            {/* <div className="row">
                <div className="col">
                    <div className="card"  style={{border:0}}>
                    <img class="card-img-top" src="../images/casts/user-4.png" alt="Card cap" style={{ height: '250px' }}/>
                        <div className="card-body">
                        </div>
                    </div>
                </div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
            </div> */}

            <div className="row">
                <div className="card-group-title">Reviews</div>
            </div>
            <div className="row">
                <Reviews user="user-1" rating="4" key="1" />
                <Reviews user="user-2" rating="2" key="2" />
                <Reviews user="user-1" rating="3" key="3" />
                <Reviews user="user-3" rating="5" key="4" />
                <Reviews user="user-2" rating="4" key="5" />
            </div>

            <div className="row">
                <Link className="btn btn-block btn-info btn-ticket" to="/seatAllot">Book Tickets</Link>
            </div>
        </div>
    );
}

export default MovieDescription;
<div className="container-fluid">
                <div className="row">
                    <div className="position-relative w-100">
                        <img src={'../images/banner/' + this.props.match.params.movieId + '.jpg'}
                            className="img w-100" style={{ height: '60vh', borderRadius: '10px' }} alt="Responsive" />
                        <img src="../images/others/play.png" alt="play" className="img position-absolute play" />
                    </div>
                </div>
                <div className="row">
                    <Link className="btn btn-success btn-block btn-ticket" to="/seatAllot">Book Now !</Link>
                </div>
                <div className="row">
                    <div className="card-group-title">Movie Description</div>
                </div>
                <div className="row">
                    <p className="description">{this.state.movie?.description}</p>
                </div>
                <div className="row">
                    <div className="card-group-title">Cast</div>
                </div>
                <div className="row">
                    <ul>
                        {
                            this.state.movie?.cast.map((castActor, index) =>
                                <li key={index}>{castActor}</li>
                            )
                        }
                    </ul>
                </div>
                <div className="row">
                    <div className="card-group-title">Reviews</div>
                </div>
                <div className="row">
                    <Reviews movieId="M2794" />
                </div>
            </div>


            


                             
import React from 'react';

function MovieDescription() {

    return (
        // const id = this.getParams();
        <div className="custom-container" >
            <img src="../images/banner/GentleMan.jpg" className="img w-100" style={{ height: '45vh' }} alt="Responsive" />
            <div className="row">
                <div className="col-xl-2 col-lg-3 col-md-3 col-sm-8 offset-sm-2">
                    <div className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src="../images/film-cards/GentleMan.jpg" className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

function getParams() {
    return this.props.match?.params.movieId;
}

export default MovieDescription;
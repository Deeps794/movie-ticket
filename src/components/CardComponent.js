import React from 'react';

function Card() {
    return (
        <div className="card">
            <img className="card-img-top" src="card.jpg" alt="Card cap" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="row justify-content-center">
                <a href="{}" className="btn btn-secondary w-100">Book Now!</a>
                </div>
            </div>
        </div>
    );
}

export default Card;
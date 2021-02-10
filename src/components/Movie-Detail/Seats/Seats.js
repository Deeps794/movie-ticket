import '../../../App.scss';
import 'react-datepicker/dist/react-datepicker.css';

import * as SVG from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';


export class Seats extends Component {
    seatsLayout = [10, 10, 10, 14, 14, 14, 14, 14, 14, 14, 10, 10];

    componentDidMount() {
        this.setState({
            seats: this.createSeats(),
            occupiedSeats: ['A4', 'A5', 'A6', 'E7', 'F12', 'F13', 'F14', 'H2']
        });

        window.scrollTo(0, document.body.scrollHeight);
    }

    createSeats() {
        const seats = [];
        for (let j = 1; j <= this.seatsLayout.length; j++) {
            const seat = [];
            for (let i = 1; i < this.seatsLayout[j]; i++) {
                seat.push(String.fromCharCode(64 + j) + '' + i);
            }
            seats.push(seat);
        };
        return seats;
    }

    constructor(props) {
        super(props)
        this.state = {
            seats: [],
            occupiedSeats: []
        };
    }

    render() {
        return (
            <React.Fragment>
                {this.getSeatLayout()}
                <div className="seat-section">
                    <span><FontAwesomeIcon className="mx-2" icon={SVG.faSquareFull} size="1x" color="#212529"/>AVAILABLE</span>
                    <span><FontAwesomeIcon className="mx-2" icon={SVG.faSquareFull} size="1x" color="#f44336" />TAKEN</span>
                    <span><FontAwesomeIcon className="mx-2" icon={SVG.faSquareFull} size="1x" color="#7CB342" />YOUR SELECTION</span>
                </div>
            </React.Fragment>

        );
    }

    getSeatLayout() {
        return this.state.seats.map((row, rowIndex) => {
            return (
                <div key={rowIndex}>
                    {this.getSeatColumns(row)}
                </div>
            );
        });
    }

    getSeatColumns(row) {
        return row.map((seatNumber, columnIndex) => {
            return (
                <div onClick={() => this.props.ontoggleBook(seatNumber)} key={columnIndex}
                    className={Math.floor(row.length / 2) === columnIndex ? 'seat ml-4' : 'seat'}>
                    <span className="seat-number">{seatNumber}</span>
                    <FontAwesomeIcon icon={SVG.faSquareFull}
                        color={this.props.bookSeats.includes(seatNumber) ? '#7CB342' : ''} size="2x"
                        className={this.state.occupiedSeats.includes(seatNumber) ? 'booked' : ''} />
                </div>

            );
        });
    }
}

export default Seats;
import '../App.css';

import * as SVG from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

class SeatAllot extends Component {
    columnLimit = 25;
    rowLimit = 20;

    componentDidMount() {
        this.setState({
            seats: this.createSeats(),
            occupiedSeats: ['A11', 'A12', 'A22', 'E7', 'F22', 'F17', 'F18', 'H2']
        });
    }

    createSeats() {
        const seats = [];
        for (let j = 1; j <= this.rowLimit; j++) {
            const seat = [];
            for (let i = 1; i <= this.columnLimit; i++) {
                seat.push({ [String.fromCharCode(64 + j) + '' + i]: false });
            }
            seats.push(seat);
        };
        return seats;
    }

    constructor(props) {
        super(props)
        this.state = {
            seats: [],
            bookedSeats: [],
            occupiedSeats: []
        };
        this.toggleBookedStatus = this.toggleBookedStatus.bind(this);
        this.showBookedTickets = this.showBookedTickets.bind(this);
    }

    toggleBookedStatus(rowIndex, columnIndex) {
        const existingSeats = this.state.seats;
        let bookedSeats = this.state.bookedSeats;
        const seat = existingSeats[rowIndex][columnIndex];
        const seatName = Object.keys(seat)[0];
        seat[seatName] = !seat[seatName];
        bookedSeats = seat[seatName] ? this.addSeatToBookedTickets(seatName) : this.removeSeatFromBookedTickets(seatName);
        this.setState({
            seats: existingSeats,
            bookedSeats: bookedSeats
        });
    }

    addSeatToBookedTickets(seat) {
        const bookedSeats = this.state.bookedSeats;
        const index = bookedSeats.findIndex(existingSeat => existingSeat === seat);
        if (index === -1) {
            bookedSeats.push(seat);
        }
        return bookedSeats;
    }

    removeSeatFromBookedTickets(seat) {
        const bookedSeats = this.state.bookedSeats;
        const index = bookedSeats.findIndex(existingSeat => existingSeat === seat);
        if (index > -1) {
            bookedSeats.splice(index, 1);
        }
        return bookedSeats;
    }

    render() {
        return (
            <div>
                {this.getSeatLayout()}
                <div className="row">
                    <button
                        className={this.state.bookedSeats.length > 0 ? 'btn btn-block btn-primary' : 'btn btn-block btn-primary disabled'}
                        onClick={this.showBookedTickets}>Book Tickets</button>
                </div>
            </div>
        );
    }

    getSeatLayout() {
        return this.state.seats.map((row, rowIndex) => {
            return (
                <div className="row" key={rowIndex} style={{ borderBottom: '5px solid #232f34' }}>
                    <div className="col-1">
                        <span className="seat-row-card">{String.fromCharCode(65 + rowIndex)}</span>
                    </div>

                    <div className="col-11 text-center pt-0">
                        {this.getSeatColumns(row, rowIndex)}
                    </div>
                </div>

            );
        });
    }

    showBookedTickets() {
        alert('Booked Seats: ' + this.state.bookedSeats);
        console.log(this.state.bookedSeats);
    }


    getSeatColumns(row, rowIndex) {
        return row.map((seat, columnIndex) => {
            return (
                <div key={columnIndex} className="seat">
                    <span className="seat-number">{Object.keys(seat)[0]}</span>
                    <FontAwesomeIcon icon={SVG.faCouch} color={seat[Object.keys(seat)[0]] ? '#7CB342' : '#ECEFF1'} size="2x"
                        onClick={() => this.toggleBookedStatus(rowIndex, columnIndex)}
                        className={this.state.occupiedSeats.includes(Object.keys(seat)[0]) ? 'booked' : ''} />
                </div>
            );
        });
    }
}

export default SeatAllot;
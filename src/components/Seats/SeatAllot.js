import '../../App.css';
import 'react-datepicker/dist/react-datepicker.css';

import * as SVG from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

import SelectDatePicker from './DatePicker';

class SeatAllot extends Component {
    columnLimit = 10;
    rowLimit = 7;

    componentDidMount() {
        this.setState({
            seats: this.createSeats(),
            occupiedSeats: ['A11', 'A12', 'A22', 'E7', 'F22', 'F17', 'F18', 'H2']
        });

        window.scrollTo(0, document.body.scrollHeight);
        // this.dateModal.click();
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
        const date = new Date();
        this.state = {
            seats: [],
            bookedSeats: [],
            occupiedSeats: [],
            date: new Date(),
            displayDate: date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()
        };
        this.toggleBookedStatus = this.toggleBookedStatus.bind(this);
        this.showBookedTickets = this.showBookedTickets.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
    }

    getMaximumDate() {
        const maximumDate = new Date();
        maximumDate.setDate(new Date().getDate() + 3);
        return maximumDate;
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

    onDateChange(date) {
        if (date instanceof Date) {
            this.setState({
                date: date,
                displayDate: date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()
            });
        }
        this.dateModal.click();
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
            <React.Fragment>
                {this.getSeatLayout()}
            </React.Fragment>

        );
    }

    getSeatLayout() {
        return this.state.seats.map((row, rowIndex) => {
            return (
                <div className="col text-center pt-0" key={rowIndex}>
                    {this.getSeatColumns(row, rowIndex)}
                </div>
            );
        });
    }

    showBookedTickets() {
        console.log(this.state.bookedSeats);
        this.routeToTheatre();
    }

    getSeatColumns(row, rowIndex) {
        return row.map((seat, columnIndex) => {
            return (
                <div key={columnIndex} className="seat">
                    <span className="seat-number">{Object.keys(seat)[0]}</span>
                    <FontAwesomeIcon icon={SVG.faSquareFull} color={seat[Object.keys(seat)[0]] ? '#7CB342' : '#4f4d7c'} size="2x"
                        onClick={() => this.toggleBookedStatus(rowIndex, columnIndex)}
                        className={this.state.occupiedSeats.includes(Object.keys(seat)[0]) ? 'booked' : ''} />
                </div>
            );
        });
    }

    routeToTheatre() {
        this.props.history.push('/theatre');
    }
}

export default SeatAllot;
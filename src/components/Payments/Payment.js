import './Payment.css';

import React from 'react';
import DatePicker from 'react-datepicker';

class Payment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expiryDate: {
                value: '',
                touched: false
            },
            cardCVV: {
                value: '',
                touched: false
            },
            cardNumber: {
                value: '',
                touched: false
            },
            number: {
                value: '',
                touched: false
            },
            cardType: 'Paypal',
            formErrors: {
                others: {
                    cardCVV: null,
                    cardNumber: null,
                    expiryDate: null,
                },
                phonepe: {
                    number: null
                }

            },
            formError: true
        }
        this.handleCardNumberChange = this.handleCardNumberChange.bind(this);
        this.handleCardCVVChange = this.handleCardCVVChange.bind(this);
        this.handleExpiryDateChange = this.handleExpiryDateChange.bind(this);
        this.handleCardTypeChange = this.handleCardTypeChange.bind(this);

    }

    componentDidMount() {
        // this.setState({formError: this.state.cardType === 'others'});
    }

    render() {
        return (
            <div>Payments</div>
        );
    }

    handleNumberChange(event) {
        let control = this.state.number;
        control.touched = true;
        let formErrors = this.state.formErrors.phonepe;
        const { value } = event.target;
        if (value.length !== 10 && control.touched) {
            formErrors.number = '*Enter valid phone number';
        } else {
            formErrors.number = '';
        }
        control.value = event.target.value;
        this.handleValidation(this.state.cardType);
    }

    handleCardNumberChange(event) {
        let control = this.state.cardNumber;
        control.touched = true;
        let formErrors = this.state.formErrors.others;
        const { value } = event.target;
        if (value.length < 16 && control.touched) {
            formErrors.cardNumber = '*Must enter 16 digits';
        } else {
            formErrors.cardNumber = '';
        }
        control.value = event.target.value;
        this.handleValidation(this.state.cardType);
    }

    handleCardCVVChange(event) {
        let control = this.state.cardCVV;
        control.touched = true;
        let formErrors = this.state.formErrors.others;
        const { value } = event.target;
        if (value.length < 3 && control.touched) {
            formErrors.cardCVV = '*Must enter 3 digits';
        } else {
            formErrors.cardCVV = '';
        }
        control.value = event.target.value;
        this.handleValidation(this.state.cardType);
    }

    handleExpiryDateChange(event) {
        const year = JSON.stringify(event).substring(1, 5);
        const month = (parseInt(JSON.stringify(event).substring(6, 8)) % 12) + 1;
        const value = JSON.stringify(month) + '/' + year;
        let control = this.state.expiryDate;
        control.touched = true;
        let formErrors = this.state.formErrors.others;
        if (value.length < 3 && control.touched) {
            formErrors.expiryDate = '*Enter expiry date';
        } else {
            formErrors.expiryDate = '';
        }
        control.value = value;
        this.handleValidation(this.state.cardType);
    }

    handleCardTypeChange(event) {
        console.log('card type', event)
        this.setState({ cardType: event });
        this.handleValidation(event);

    }

    proceedToPay(event) {
        event.persist();
        console.log(this.state);
        // route to other pages.    
    }

    handleValidation(cardType) {
        if (cardType === 'others') {
            this.validateOtherCrds();
        } else if (cardType === 'Phonepe') {
            this.validatePhonepe();
        }
    }
    validateOtherCrds() {
        this.setState({ formError: true });
        for (const value of Object.entries(this.state.formErrors.others)) {
            if (value !== '') {
                this.setState({ formError: true });
                return;
            } else {
                this.setState({ formError: false });
            }
        }
    }

    validatePhonepe() {
        this.setState({ formError: true });
        if (this.state.formErrors.phonepe.number !== '') {
            this.setState({ formError: true });
            return
        } else {
            this.setState({ formError: false });
        }
    }
}


function showAlert() {
    alert('Tickets Booked Successfully....');
}

export default Payment;
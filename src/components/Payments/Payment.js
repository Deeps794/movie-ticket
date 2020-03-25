import './Payment.css';
import DatePicker from 'react-datepicker';
import React from 'react';


class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expiryDate:{
                value:'',
                touched: false
            },
            cardCVV: {
                value:'',
                touched: false
            },
            cardNumber: {
                value:'',
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
        <div className="container">
            <div className="text-center pt-4" style={{ color: 'white' }}><h3>Payments</h3></div>
            <form>
                <div className="card shadow-lg p-0 mb-5 rounded payment-card">
                    <div className="card-body p-0">
                    <div className="custom-control custom-radio pt-2 pl-0">
                            <input type="radio" className="custom-control-input" id="customRadio1" name="example1" 
                                checked={this.state.cardType === "Paypal"} onChange={()=> {this.handleCardTypeChange("Paypal")}} value="Paypal" />
                            <label className="custom-control-label mx-1" htmlFor="customRadio1">PayPal</label>
                            <img src="../images/cards/paypal.png" className="position-absolute card-icon" alt="Pay Pal"></img>
                        </div>
                        <div className="custom-control custom-radio pt-2 pl-0 p-relative">
                            <input type="radio" className="custom-control-input" id="customRadio" name="example1" 
                                checked={this.state.cardType === "Phonepe"} onChange={()=> {this.handleCardTypeChange("Phonepe")}} value="Phonepe" />
                           <label className="custom-control-label mx-1" htmlFor="customRadio">Phonepe</label>
                            <div className="p-relative">
                            <input type="text"  className={(this.state.cardType === 'Phonepe' ? '' : 'disable-cards ') + "form-control-plaintext number-box"} id="number" value={this.state.number.value} 
                                    autoComplete="off" maxLength="10" onChange={($event) => {this.handleNumberChange($event);}} placeholder="Enter number" />
                                <span className="error phone-number">{this.state.formErrors.phonepe.number}</span>
                            </div>
                            <img src="../images/cards/paypal.png" className="position-absolute card-icon" alt="Pay Pal"></img>
                        </div>
                        <div className="custom-control custom-radio pt-2 pl-0">
                            <input type="radio" className="custom-control-input" id="customRadio2" name="example1" 
                                checked={this.state.cardType === "others"} onChange={()=> {this.handleCardTypeChange("others")}} value="others" />
                            <label className="custom-control-label mx-1" htmlFor="customRadio2">Debit/Credit Card</label>
                            <img src="../images/cards/visa.png" className="position-absolute card-icon" alt="Pay Pal"></img>
                            <img src="../images/cards/maestro.png" style={{ right: '50px' }} className="position-absolute card-icon" alt="Pay Pal"></img>
                        </div>
                        <div className={(this.state.cardType === 'others' ? '' : 'disable-cards')}>
                        <div className="form-group row custom-radio">
                            <label htmlFor="cardNumber" className="col-4 col-form-label">Card Number</label>
                            <div className="col-8 position-relative">
                                <input type="text" className="form-control-plaintext" id="cardNumber" value={this.state.cardNumber.value} maxLength="16"
                                    autoComplete="off"onChange={($event) => {this.handleCardNumberChange($event);}} placeholder="____-____-____-____" />
                                    <span className="error card-number">{this.state.formErrors.others.cardNumber}</span>
                            </div>
                        </div>
                        <div className="form-group row custom-radio">
                            <label htmlFor="cardExpiryMonth" className="col-3 col-form-label">Expiry</label>
                            <div className="col-3 positive-relative">
                               <DatePicker  placeholderText="Choose a date" showMonthYearPicker={true} className="month-picker" 
                                    value={this.state.expiryDate.value} onSelect={($event) => {this.handleExpiryDateChange($event)}} />
                                <span className="error expiry-date">{this.state.formErrors.others.expiryDate}</span>
                            </div>
                            <label htmlFor="cardExpiryMonth" className="col-3 col-form-label">CVV</label>
                            <div className="col-3 position-relative">
                                <input type="text" className="form-control-plaintext" id="cardExpiryMonth" value={this.state.cardCVV.value} maxLength="3"
                                    autoComplete="off" onChange={($event) => {this.handleCardCVVChange($event)}} placeholder="___" />
                                    <span className="error cvv">{this.state.formErrors.others.cardCVV}</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="card payment-card">
                    <button type="button" className={(this.state.cardType === "Paypal" ? ' ' : this.state.formError ? 'payment-disabled  ' : ' ') + 'btn btn-primary btn-pay'} onClick={($event) => {showAlert(); this.proceedToPay($event)}}>Proceed to Pay</button>
                </div>
            </form>
        </div>
    );
}

handleNumberChange(event) {
    let control = this.state.number;
    control.touched = true;
    let formErrors = this.state.formErrors.phonepe;
    const {value} = event.target;
    if(value.length !== 10 && control.touched) {
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
    const {value} = event.target;
    if(value.length < 16 && control.touched) {
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
    const {value} = event.target;
    if(value.length < 3 && control.touched) {
        formErrors.cardCVV = '*Must enter 3 digits';
    } else {
        formErrors.cardCVV = '';    
    }
    control.value = event.target.value;
    this.handleValidation(this.state.cardType);
}

handleExpiryDateChange(event) {
    const year = JSON.stringify(event).substring(1,5);
    const month = (parseInt(JSON.stringify(event).substring(6,8)) % 12) + 1;
    const value = JSON.stringify(month) + '/' + year;
    let control = this.state.expiryDate;
    control.touched = true;
    let formErrors = this.state.formErrors.others;
    if(value.length < 3 && control.touched) {
        formErrors.expiryDate= '*Enter expiry date';
    } else {
        formErrors.expiryDate = ''; 
    }
    control.value = value;
    this.handleValidation(this.state.cardType);
}

handleCardTypeChange(event) {
    console.log('card type', event)
    this.setState({cardType: event});
    this.handleValidation(event);

}

proceedToPay(event) {
    event.persist();
    console.log(this.state);
    // route to other pages.    
}

handleValidation(cardType) {
    if(cardType === 'others') {
        this.validateOtherCrds();
    } else if (cardType === 'Phonepe') {
        this.validatePhonepe();
    }  
}
validateOtherCrds() {
    this.setState({formError: true});
    for(const [key,value] of Object.entries(this.state.formErrors.others)) {
        if(value !== '') {
            this.setState({formError: true});
            return;
        } else {
            this.setState({formError: false});
        }
    }
}

validatePhonepe() {
    this.setState({formError: true});
    if(this.state.formErrors.phonepe.number !== '') {
        this.setState({formError: true});
        return
    } else {
        this.setState({formError: false});
    }
}
}


function showAlert() {
    alert('Tickets Booked Successfully....');
}

export default Payment;
import '../styles/Payment.css';

import React from 'react';

export function Payment() {
    return (
        <div className="container">
            <div className="text-center pt-4" style={{ color: 'white' }}><h3>Payments</h3></div>
            <form>
                <div className="card shadow-lg p-0 mb-5 rounded payment-card">
                    <div className="card-body p-0">
                        <div className="custom-control custom-radio pt-2 pl-0">
                            <input type="radio" className="custom-control-input" id="customRadio" name="example1" value="customEx" />
                            <label className="custom-control-label mx-1" htmlFor="customRadio">Pay Pal</label>
                            <img src="../images/cards/paypal.png" className="position-absolute card-icon" alt="Pay Pal"></img>
                        </div>
                        <div className="custom-control custom-radio pt-2 pl-0">
                            <input type="radio" className="custom-control-input" id="customRadio2" name="example1" value="customEx1" />
                            <label className="custom-control-label mx-1" htmlFor="customRadio2">Debit/Credit Card</label>
                            <img src="../images/cards/visa.png" className="position-absolute card-icon" alt="Pay Pal"></img>
                            <img src="../images/cards/maestro.png" style={{ right: '50px' }} className="position-absolute card-icon" alt="Pay Pal"></img>
                        </div>
                        <div className="form-group row custom-radio">
                            <label htmlFor="cardNumber" className="col-4 col-form-label">Card Number</label>
                            <div className="col-8">
                                <input type="text" readOnly className="form-control-plaintext" id="cardNumber"
                                    value="4111 3234 7923 2800" placeholder="XXXX XXXX XXXX XXXX" />
                            </div>
                        </div>
                        <div className="form-group row custom-radio">
                            <label htmlFor="cardExpiryMonth" className="col-3 col-form-label">Expiry</label>
                            <div className="col-3">
                                <input type="text" readOnly className="form-control-plaintext" id="cardExpiryMonth" placeholder="MM/YY" />
                            </div>
                            <label htmlFor="cardExpiryMonth" className="col-3 col-form-label">CVV</label>
                            <div className="col-3">
                                <input type="text" readOnly className="form-control-plaintext" id="cardExpiryMonth" placeholder="___" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card payment-card">
                    <button type="button" className="btn btn-primary btn-pay" onClick={() => showAlert()}>Proceed to Pay</button>
                </div>
            </form>
        </div>
    );
}

function showAlert() {
    alert('Tickets Booked Successfully....');
}

export default Payment;
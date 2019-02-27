import React from 'react';
import './CheckoutSummary.css';

const CheckoutSummary = (props) => {
    return (
        <div className="CheckoutSummary">
            <h1>We hope it tastes well!</h1>
            <button type='button' onClick={props.checkoutCancelled}>CANCEL</button>
            <button type='button' onClick={props.checkoutContinued}>CONTINUE</button>
        </div>
    );
};

export default CheckoutSummary;

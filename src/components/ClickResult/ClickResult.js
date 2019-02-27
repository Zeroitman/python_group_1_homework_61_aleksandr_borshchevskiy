import React from 'react';

const ClickResult = (props) => {
    return (
        <div className="text-center">
            <h2><b>{props.name}</b></h2>
            <h5>{props.text}</h5>
            <div className="mb-3"><img src={props.src} alt={"img"}/></div>
            <button type="button" className="btn btn-secondary" onClick={props.checkoutCancelled}>Назад</button>
        </div>
    );
};

export default ClickResult;

import React from 'react';

function Button(props) {
    return <div>
        <button type="button" className="btn btn-success" onClick={props.click}><span>{props.name}</span></button>
    </div>
}

export default Button;
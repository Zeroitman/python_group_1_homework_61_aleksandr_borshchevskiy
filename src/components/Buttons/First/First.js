import React from 'react';

function First(props) {
    return <div>
        <button type="button" className="btn btn-success" disabled={props.disabled}
                onClick={props.click}><span>ГИГАНТОЗАВР</span>
        </button>
    </div>
}

export default First;
import React from 'react';

function Third(props) {
    return <div>
        <button type="button" className="btn btn-warning" disabled={props.disabled}
                onClick={props.click}><span>СПИНОЗАВР</span>
        </button>
    </div>
}

export default Third;
import React from 'react';

function Third(props) {
    return <div>
        <button type="button" className="btn btn-warning" disabled={props.disabled}
                onClick={props.click}><span>Топ-1 ГИГАНТОЗАВР</span>
        </button>
    </div>
}

export default Third;
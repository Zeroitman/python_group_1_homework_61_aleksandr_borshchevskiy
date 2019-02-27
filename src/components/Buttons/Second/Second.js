import React from 'react';

function Second(props) {
    return <div>
        <button type="button" className="btn btn-danger" disabled={props.disabled}
                onClick={props.click}><span>Топ-1 ГИГАНТОЗАВР</span>
        </button>
    </div>
}

export default Second;
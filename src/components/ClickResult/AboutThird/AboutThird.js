import React from 'react';
import './AboutThird.css';
import img_3 from '../../../image/third.jpg'

const AboutThird = (props) => {
    return (
        <div className="AboutFirst">
            <h2><b>Спинозавр</b></h2>
            <h5>Самый большой полный скелет этого жителя Африки после измерения показал длину в 12 метров. Однако есть
                веские основания предполагать существование особей 18 метровой длины, так что спинозавр вполне может
                бороться за первое место в этом списке. Спинозавр — тварь на редкость неприятная внешне, если верить
                фотороботу. Правда, некоторые палеонтологи предлагают альтернативное видение, ещё более неприятное — с
                горбом и хоботом — поскольку по их версии ел он в основном рыбу. Проверь это при первой встрече.
            </h5>
            <div className="mb-3"><img src={img_3} alt = {img_3}/></div>
            <button type="button" className="btn btn-secondary" onClick={props.checkoutCancelled}>Назад</button>
            {/*<button type='button' onClick={props.checkoutContinued}>CONTINUE</button>*/}
        </div>
    );
};

export default AboutThird;

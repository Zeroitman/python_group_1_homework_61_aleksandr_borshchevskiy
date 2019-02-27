import React from 'react';
import './AboutSecond.css';
import img_2 from '../../../image/second.jpg'

const AboutSecond = (props) => {
    return (
        <div className="AboutFirst">
            <h2><b>Плиозавр</b></h2>
            <h5>Сразу скажем, что наиболее популярный в народе плиозавр — лиоплевродон. Тебе также надо знать тот факт,
                что плиозавры — самые огромные хищники, когда либо обитавшие на нашей планете, так как 20 метров для
                них — вполне досягаемый размер. Одни только ласты вырастали до 3 метров, а зубы — до 40 сантиметров.
                Слава богу Посейдону, что плиозавры — твари морские, в города не заплывали. Палеонтологи как-то в
                Мексике нашли 18-ти метровый скелет плиозавра. Казалось бы, суровая, забористая тварь! Но штука в том,
                что на этих костях нашли повреждения, нанесенные зубами другого, ещё более крупного плиозавра, метров
                этак на 25!
            </h5>
            <div className="mb-3"><img src={img_2} alt = {img_2}/></div>
            <button type="button" className="btn btn-secondary" onClick={props.checkoutCancelled}>Назад</button>
            {/*<button type='button' onClick={props.checkoutContinued}>CONTINUE</button>*/}
        </div>
    );
};

export default AboutSecond;

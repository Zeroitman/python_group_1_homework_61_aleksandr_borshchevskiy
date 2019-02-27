import React, {Component} from 'react';
import ClickResult from "../../components/ClickResult/ClickResult";
import img_3 from "../../image/third.jpg";

class ThirdPage extends Component {checkoutCancelledHandler = () => {this.props.history.goBack()};

    render() {
        return  <div><ClickResult
                        name={"Cпинозавр"}
                        text={"Самый большой полный скелет этого жителя Африки после измерения показал длину в 12 метров. Однако есть\n" +
                        "                веские основания предполагать существование особей 18 метровой длины, так что спинозавр вполне может\n" +
                        "                бороться за первое место в этом списке. Спинозавр — тварь на редкость неприятная внешне, если верить\n" +
                        "                фотороботу. Правда, некоторые палеонтологи предлагают альтернативное видение, ещё более неприятное — с\n" +
                        "                горбом и хоботом — поскольку по их версии ел он в основном рыбу. Проверь это при первой встрече."}
                        checkoutCancelled={this.checkoutCancelledHandler}
                        src={img_3}/>
                </div>;
    }
}

export default ThirdPage;

import React, {Component} from 'react';
import ClickResult from "../../components/ClickResult/ClickResult";
import img_2 from "../../image/second.jpg";

class SecondPage extends Component {checkoutCancelledHandler = () => {this.props.history.goBack()};

    render() {
        return  <div><ClickResult
                        name = {"Плиозавр"}
                        text = {"Сразу скажем, что наиболее популярный в народе плиозавр — лиоплевродон. Тебе также надо знать тот факт,\n" +
                        "                что плиозавры — самые огромные хищники, когда либо обитавшие на нашей планете, так как 20 метров для\n" +
                        "                них — вполне досягаемый размер. Одни только ласты вырастали до 3 метров, а зубы — до 40 сантиметров.\n" +
                        "                Слава богу Посейдону, что плиозавры — твари морские, в города не заплывали. Палеонтологи как-то в\n" +
                        "                Мексике нашли 18-ти метровый скелет плиозавра. Казалось бы, суровая, забористая тварь! Но штука в том,\n" +
                        "                что на этих костях нашли повреждения, нанесенные зубами другого, ещё более крупного плиозавра, метров\n" +
                        "                этак на 25!"}
                        checkoutCancelled={this.checkoutCancelledHandler}
                        src = {img_2}/>
                </div>;
    }
}

export default SecondPage;

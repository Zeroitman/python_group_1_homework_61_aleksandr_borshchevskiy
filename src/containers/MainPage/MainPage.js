import React, {Component, Fragment} from 'react';
import Button from "../../components/Button/Button"

class MainPage extends Component {
    successFirst = () => {this.props.history.push({pathname: '/page_1'})};
    successSecond = () => {this.props.history.push({pathname: '/page_2'})};
    successThird = () => {this.props.history.push({pathname: '/page_3'})};

    render() {
        return <Fragment>
            <div>
                <h1 className="text-center"><i>Топ 3 самых сильных динозавра</i></h1>
                <h2 className="text-center">В кино же наверняка врут: вдруг в жизни настоящие динозавры были
                    простодушными, медлительными, ранимыми добряками? Редактор MAXIM по вопросам палеонтологии отвечает
                    вот этим списком самых опасных гигантских ящеров.</h2>
            </div>
            <div className="d-flex justify-content-around mt-4">
                <Button name={"ГИГАНТОЗАВР"} click={this.successFirst}/>
                <Button name={"ПЛИОЗАВР"} click={this.successSecond}/>
                <Button name={"СПИНОЗАВР"} click={this.successThird}/>
            </div>
        </Fragment>
    }
}

export default MainPage


// constructor(props) {
//        super(props);
//        this.state = {};
//    }
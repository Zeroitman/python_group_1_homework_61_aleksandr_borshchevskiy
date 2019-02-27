import React, {Component, Fragment} from 'react';
import First from "../../components/Buttons/First/First"
import Second from "../../components/Buttons/Second/Second"
import Third from "../../components/Buttons/Third/Third"

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    successFirst = () => {
        this.props.history.push({
            pathname: '/page_1',
        });
        this.setState({purchasing: false});
    };

    successSecond = () => {
        this.props.history.push({
            pathname: '/page_2',
        });
        this.setState({purchasing: false});
    };

    successThird = () => {
        this.props.history.push({
            pathname: '/page_3',
        });
        this.setState({purchasing: false});
    };

    render() {
        return <Fragment>
            <div>
                <h1 className="text-center"><i>Топ 3 самых сильных динозавра</i></h1>
                <h2 className="text-center">В кино же наверняка врут: вдруг в жизни настоящие динозавры были
                    простодушными, медлительными, ранимыми добряками? Редактор MAXIM по вопросам палеонтологии отвечает
                    вот этим списком самых опасных гигантских ящеров.</h2>
            </div>
            <div className="d-flex justify-content-around mt-4">
                <First disabled={this.disabled} click={this.successFirst}/>
                <Second disabled={this.disabled} click={this.successSecond}/>
                <Third disabled={this.disabled} click={this.successThird}/>
            </div>

        </Fragment>
    }
}


export default MainPage

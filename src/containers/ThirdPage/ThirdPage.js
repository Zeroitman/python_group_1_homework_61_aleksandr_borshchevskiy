import React, {Component} from 'react';
import AboutThird from "../../components/ClickResult/AboutThird/AboutThird";

class ThirdPage extends Component {
    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    };

    render() {
        return <div><AboutThird checkoutCancelled={this.checkoutCancelledHandler}/></div>;
    }
}

export default ThirdPage;

import React, {Component} from 'react';
import AboutSecond from "../../components/ClickResult/AboutSecond/AboutSecond";

class SecondPage extends Component {
    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    };

    render() {
        return <div><AboutSecond checkoutCancelled={this.checkoutCancelledHandler}/></div>;
    }
}

export default SecondPage;

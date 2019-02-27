import React, {Component} from 'react';
import AboutFirst from "../../components/ClickResult/AboutFirst/AboutFirst";

class FirstPage extends Component {
    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    };

    render() {
        return <div><AboutFirst checkoutCancelled={this.checkoutCancelledHandler}/></div>;
    }
}

export default FirstPage;

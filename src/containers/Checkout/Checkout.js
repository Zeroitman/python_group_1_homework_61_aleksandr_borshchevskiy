import React, {Component} from 'react';
import AboutFirst from "../../components/ClickResult/AboutFirst/AboutFirst";
import {Route} from "react-router-dom";
// import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
    state = {
        ingredients: []
    };

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = [];
        for (let param of query.entries()) {
            ingredients[param[0]] = JSON.parse(param[1]);
        }
        this.setState({ingredients: ingredients});
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    };

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    };

    render() {
        return <div>
            <AboutFirst
                checkoutCancelled={this.checkoutCancelledHandler}
                checkoutContinued={this.checkoutContinuedHandler}
            />
            <Route
                path={this.props.match.path + '/contact-data'}
                // render={(props) => (<ContactData ingredients={this.state.ingredients}/>)}
            />
        </div>;
    }
}

export default Checkout;

import React, {Component, Fragment} from 'react';

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    successHandler = () => {
        const queryParams = [];
        for (let i in this.state.ingredients) {
            const ingredient = this.state.ingredients[i];
            queryParams.push(
                encodeURIComponent(i) + '=' +
                encodeURIComponent(JSON.stringify(ingredient))
            );
        }
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
        this.setState({purchasing: false});
    };

    render() {
        return <Fragment>
            <div>lorem</div>
            <button type="button" className="btn btn-success" disabled={this.disabled}
                    onClick={this.successHandler}>Success
            </button>
        </Fragment>
    }
}


export default BurgerBuilder

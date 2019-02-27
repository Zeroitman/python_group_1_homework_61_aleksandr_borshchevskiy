import React, {Component} from 'react';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Route, Switch, BrowserRouter } from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <BrowserRouter>
                    <Switch>
                        <Route path="/checkout" component={Checkout}/>
                        <Route path="/" exact component={BurgerBuilder}/>
                    </Switch>
                </BrowserRouter>
                <Footer/>
            </div>
        );
    }
}


export default App;


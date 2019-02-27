import React, {Component} from 'react';
import MainPage from './containers/MainPage/MainPage'
import FirstPage from './containers/FirstPage/FirstPage'
import SecondPage from './containers/SecondPage/SecondPage'
import ThirdPage from './containers/ThirdPage/ThirdPage'
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
                        <Route path="/" exact component={MainPage}/>
                        <Route path="/page_1" component={FirstPage}/>
                        <Route path="/page_2" component={SecondPage}/>
                        <Route path="/page_3" component={ThirdPage}/>
                    </Switch>
                </BrowserRouter>
                <Footer/>
            </div>
        );
    }
}

export default App;


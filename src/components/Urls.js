import React, { Component } from 'react';
import { BrowserRouter, HashRouter as Router, Switch, Route } from 'react-router-dom';

// routes
import Home from "./pages/Home";
import Account from "./account/Account";
import Profile from "./account/Profile";



export class Urls extends Component {

    render() {

        return (
            <div>
                <div className="loader">
                    <i className="spinner-border text-primary h1"></i>
                </div>
                <BrowserRouter>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Home} />
                        </Switch>
                    </Router>
                </BrowserRouter>

                <a href="#" className="back-to-top"><i className="icofont-simple-up"></i></a>
                <div id="preloader"></div>
            </div>
        )
    }
}
window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    loader.className += ' hidden';
});

export default Urls;


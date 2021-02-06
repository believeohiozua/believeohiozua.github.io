import React, { Component } from 'react';
import { BrowserRouter, HashRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Containers
import Home from "../containers/Home";
import About from "../containers/About";
import Contact from "../containers/Contact";
import VoucherForm from "../containers/VoucherForm";


export class Urls extends Component {

    render() {

        return (
            <div>
                <div className="loader">
                    <i className="spinner-grow text-primary h1"></i>
                </div>
                <BrowserRouter>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/contact" component={Contact} />
                            <Route exact path="/voucher" component={VoucherForm} />
                        </Switch>
                    </Router>
                </BrowserRouter>


            </div>
        )
    }
}
window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    loader.className += ' hidden';
});

export default Urls;


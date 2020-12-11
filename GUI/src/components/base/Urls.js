import React, { Component } from 'react';
import { BrowserRouter, HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Containers
import Home from "../containers/Home";


export class Urls extends Component {

    render() {

        return (
            <div id="major">
                <BrowserRouter>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Home} />
                        </Switch>
                    </Router>
                </BrowserRouter>

                <a href="#" className="back-to-top"><i className="icofont-simple-up"></i></a>
                <div id="preloader"></div>
                <Helmet>
                    <script src="static/js/custom.js" type="text/javascript" />
                </Helmet>

            </div>
        )
    }
}

export default Urls;


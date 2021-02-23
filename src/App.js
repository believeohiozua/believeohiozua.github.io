import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Helmet } from "react-helmet";
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import store from './store';
import Urls from "./components/Urls";
import Alerts from "./components/base/Alerts"
import "../static/bootstrap/css/bootstrap.min.css"
import "../static/mdb/mdb.min.css"

import './App.css';

// Alert Options
const alertOptions = {
    timeout: 4000,
    position: 'top center',
};

class App extends Component {

    render() {

        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Fragment>
                        <div >
                            <Alerts />
                        </div>
                        <Urls />
                    </Fragment>
                </AlertProvider>
                <Helmet>
                    <script src="static/js/popper.min.js" type="text/javascript" defer={false} />
                    <script src="static/mdb/mdb.min.js" type="text/javascript" defer={false} />
                    <script src="static/bootstrap/js/bootstrap.min.js" type="text/javascript" defer={false} />
                </Helmet>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('afribaggage'));

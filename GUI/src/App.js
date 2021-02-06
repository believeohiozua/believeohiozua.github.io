import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import store from './store';
import Urls from "./components/base/Urls"
import Alerts from "./components/base/Alerts"
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
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('bedcpay'));
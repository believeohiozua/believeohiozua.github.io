import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Provider as AlertProvider } from 'react-alert';
// import AlertTemplate from 'react-alert-template-basic';
import store from './store';
import Urls from "./components/base/Urls"
import Alerts from "./components/base/Alerts"
import './App.css';
// Alert Options
const alertOptions = {
    timeout: 4000,
    position: 'bottom center',
};


function closeAlert(e) {
    e.preventDefault();
    document.getElementById('alerter').style.display = "none";
}

const AlertTemplate = ({ style, options, message, close }) => (
    < div style={{ margin: "5em" }} className="text-center mx-auto" id="alerter">
        <div className="">
            {options.type === 'info' && <div className="text-white rounded-pill px-2 bg-info animated fadeUp" style={{ animationDelay: '.3s' }} data-aos="zoom-in"> {message}  </div>}
            {options.type === 'success' && <div className="text-white rounded-pill px-2 bg-success animated fadeUp" style={{ animationDelay: '.3s' }} data-aos="zoom-in"> {message}  </div>}
            {options.type === 'error' && <div className="text-white rounded-pill px-2 bg-danger animated fadeUp" style={{ animationDelay: '.3s' }} data-aos="zoom-in"> {message}  </div>}
            {/* <button style={{ zIndex: 999999 }} onClick={closeAlert} type="button" className="ml-2 mb-1 close">
                <span>&times;</span>
            </button> */}
        </div>
    </div >
)


class App extends Component {

    render() {

        return (
            <Provider store={store}>
                {/* <AlertProvider template={AlertTemplate} {...alertOptions}> */}
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

ReactDOM.render(<App />, document.getElementById('core'));
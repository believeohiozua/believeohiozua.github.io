import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Footer from "./Footer"
export class Home extends Component {

    componentWillMount() {
        var loadjs = require('loadjs');
        loadjs('static/js/private.js', function () {
            $(document).ready(function () {
                myTypewriter('writer', "Get your BEDC voucher in 10min");
            });
        })

    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {

        return (
            <Fragment>
                <div className="container-fluid pt-lg-5 pt-2 border-bottom text-center">
                    <div className="jumbotron">
                        <h1 className="h3" id="writer"></h1>
                        <p className="lead">
                            Our goal is to help you successfully purchase
                            your BEDC voucher from the Comfort of your Home:
                        </p>

                        <div className="row">
                            <div className="col-lg-6 col-md-12 mx-auto text-center">
                                <ul className="list-group list-group list-group-horizontal-sm">
                                    <li className="m-1 list-group-item d-flex justify-content-between align-items-center">
                                        Seamlessly &ensp;
                                <span className="badge badge-success badge-pill">
                                            <i className="la la-check"></i>
                                        </span>
                                    </li>
                                    <li className="m-1 list-group-item d-flex justify-content-between align-items-center">
                                        Without Stress  &ensp;
                                <span className="badge badge-success badge-pill">
                                            <i className="la la-check"></i>
                                        </span>
                                    </li>
                                    <li className="m-1 list-group-item d-flex justify-content-between align-items-center">
                                        Without Queue &ensp;
                                <span className="badge badge-success badge-pill">
                                            <i className="la la-check"></i>
                                        </span>
                                    </li>
                                    <li className="m-1 list-group-item d-flex justify-content-between align-items-center">
                                        Safe and Fast &ensp;
                                <span className="badge badge-success badge-pill">
                                            <i className="la la-check"></i>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <hr className="my-4" />
                        <p>
                            We sell Postpaid, prepaid vouchers online 24/7
                        </p>
                        <Link className="btn btn-success btn-sm rounded-pill" to="/voucher" role="button">Recharge Now</Link>


                    </div>


                    <Footer />



                </div>

            </Fragment>
        )
    }
}

export default Home

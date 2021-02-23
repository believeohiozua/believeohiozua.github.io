import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Footer extends Component {
    render() {






        return (
            <div className="container-fluid bg-white border-top py-2 px-lg-5 px-2">
                <div className="row">
                    <div className="col-md-3">
                        <div className="row">
                            <ul className="col-6" style={{ listStyle: "none" }}>
                                <li className="py-1">
                                    <Link className="fs-6 fw-bold page_flag" to="#">About</Link>
                                </li>
                                <li className="py-1">
                                    <Link className="fs-6 fw-bold page_flag" to="#">Resources</Link>
                                </li>
                                <li className="py-1">
                                    <Link className="fs-6 fw-bold page_flag" to="#">Advertises</Link>
                                </li>
                            </ul>
                            <ul className="col-6" style={{ listStyle: "none" }}>
                                <li className="py-1">
                                    <Link className="fs-6 fw-bold page_flag" to="#">Contact us</Link>
                                </li>
                                <li className="py-1">
                                    <Link className="fs-6 fw-bold page_flag" to="#">Transport</Link>
                                </li>
                                <li className="py-1">
                                    <Link className="fs-6 fw-bold page_flag" to="#">Terms of Use</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <ul style={{ listStyle: "none" }}>
                            <li className="">
                                <i className="la la-phone"></i>&ensp;+234 626 623 73 26
                            </li>
                            <li className="py-2">
                                <i className="la la-envelope"></i>&ensp;help@afribaggage.com
                            </li>
                            <li className="">
                                <i className="la la-map-marker"></i>&ensp;MaryLand 100211
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <p>
                            Afribaggage is a solution provider helping improve
                            international shipping through technological innovations
                            and providing earning opportunities for travelers / carriers
                        </p>
                    </div>
                    <div className="col-md-3 mx-auto text-center">
                        <div className="text-center pb-4 text-center mx-auto">
                            <img src="static/img/footimg.svg" alt="" height="60" width="250" />
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <i className="la la-telegram text-white rounded-circle p-2 page_flag_bg"></i>
                            </div>
                            <div className="col-2">
                                <i className="la la-facebook text-white rounded-circle p-2 page_flag_bg"></i>
                            </div>
                            <div className="col-2">
                                <i className="la la-twitter page_flag fs-2"></i>
                            </div>
                            <div className="col-2">
                                <i className="la la-instagram page_flag fs-2"></i>
                            </div>
                            <div className="col-2">
                                <i className="la la-linkedin page_flag_bg text-white fs-3"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;

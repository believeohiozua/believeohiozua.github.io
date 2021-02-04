import React, { Component, Fragment } from 'react';
import NavBar from '../base/NavBar';
import Footer from '../base/Footer';

export class Home extends Component {
    render() {
        return (
            <Fragment>

                <body>


                    <header className="section-header bg-light py-4">
                        <div className="container">
                            <h2>Get Prepaid BEDC voucher</h2>
                        </div>
                    </header>



                    <div className="container">

                        <section className="section-content py-2">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="p-2">
                                                <button data-toggle="modal" data-target="#modal_simple" className="btn-primary rounded-pill px-2" type="button">  Buy prepaid voucher </button>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="p-2">
                                                <button data-toggle="modal" data-target="#modal_aside_right" className="btn-info rounded-pill px-2" type="button">  Buy post paid voucher  </button>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="p-2">
                                                <button data-toggle="modal" data-target="#modal_aside_left" className="btn-success rounded-pill px-2" type="button">  Contact us  </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>






                            <br /> <br />
                            <h6>Demo view: Offcanvas sidebars with bootstrap modal component.  </h6>
                            <p>For this demo page you should connect to the internet to receive files from CDN  like Bootstrap CSS, Bootstrap JS and jQuery. </p>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>

                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>

                            {/* <a href="http://bootstrap-menu.com/detail-modal.html" className="btn btn-warning"> laquo Back to tutorial or Download code</a> */}

                        </section>

                    </div>




                    <div id="modal_simple" className="modal fade" tabindex="-1" role="dialog">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Simple modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div>
                                        <form>

                                            <div className="form-outline mb-4">
                                                <input type="text" id="form5Example1" className="form-control" />
                                                <label className="form-label" for="form5Example1">Name</label>
                                            </div>


                                            <div className="form-outline mb-4">
                                                <input type="email" id="form5Example2" className="form-control" />
                                                <label className="form-label" for="form5Example2">Email address</label>
                                            </div>


                                            <div className="form-check d-flex justify-content-center mb-4">
                                                <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    value=""
                                                    id="form5Example3"
                                                    checked
                                                />
                                                <label className="form-check-label" for="form5Example3">
                                                    I have read and agree to the terms
    </label>
                                            </div>


                                            <button type="submit" className="btn btn-primary btn-block mb-4">Subscribe</button>
                                        </form>
                                    </div>

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div id="modal_aside_right" className="modal fixed-right fade" tabindex="-1" role="dialog">
                        <div className="modal-dialog modal-dialog-aside" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Right fixed sample</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <p>Modal body text goes here. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div id="modal_aside_left" className="modal fixed-left fade" tabindex="-1" role="dialog">
                        <div className="modal-dialog modal-dialog-aside" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Left fixed sample</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <p>Modal body text goes here. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                     proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </body>

            </Fragment>
        )
    }
}

export default Home

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Footer from "./Footer"


export class Contact extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="p-3">
                            <Link title="Back Home" to="/" className="btn btn-info btn-sm">
                                <i className="la la-angle-left"></i> Home
                   </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 float-right">
                            <Link title="Back Home" to="/voucher" className="btn btn-info btn-sm">
                                Recharge <i className="la la-angle-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row border-bottom border-top">
                    <div className="col-md-6 pt-1">
                        <div className="row">
                            <div className="col-md-6">
                                <p>Phone</p>
                                <div className="card m-2 p-2">
                                    <ul style={{ listStyle: "none" }}>
                                        {/* <p> <i className="la la-phone"></i> Phone Number</p> */}
                                        <li>
                                            <a href="tel:+234 70 358 4838" className="text-secondary">
                                                <i className="la la-phone"></i>&ensp;+234 70 358 4838
                                                </a>
                                        </li>
                                        <li>
                                            <a href="tel:+234 70 358 4838" className="text-secondary">
                                                <i className="la la-phone"></i>&ensp;+234 70 358 4838
                                                </a>
                                        </li>
                                        <li>
                                            <a href="tel:+234 70 358 4838" className="text-secondary">
                                                <i className="la la-phone"></i>&ensp;+234 70 358 4838
                                                </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <p>E-mail</p>
                                <div className="card m-2 p-2">
                                    <ul style={{ listStyle: "none" }}>
                                        {/* <p><i className="la la-envelope"></i> email</p> */}
                                        <li>
                                            <i className="la la-envelope"></i>&ensp;email@eamil.com
                                      </li>
                                        <li>
                                            <i className="la la-envelope"></i>&ensp;email@eamil.com
                                      </li>
                                        <li>
                                            <i className="la la-envelope"></i>&ensp;email@eamil.com
                                      </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <p>Loaction</p>
                                <div className="card m-2 p-2">

                                    <p className="p-1">
                                        <em>
                                            <i className="la la-location"></i> 59, I.C.E road, off wire road, Benin City, Edo state.
                                        </em>
                                    </p>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.3473526629696!2d5.614127514306522!3d6.349051726929309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d310e657e33b%3A0x658009bce1bbfc19!2s59%20I.C.E.%20Road%2C%20Use%2C%20Benin%20City%2C%20Nigeria!5e0!3m2!1sen!2sbg!4v1612527404614!5m2!1sen!2sbg"
                                        frameBorder="0"
                                        style={{ border: 0, width: "100%", height: '100%' }} allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 py-lg-5">

                        {/* <form>

                            <div className="form-outline mb-4 md-form">
                                <input type="text" id="form4Example1" className="form-control" />
                                <label className="form-label" for="form4Example1">Name</label>
                            </div>


                            <div className="form-outline mb-4">
                                <input type="email" id="form4Example2" className="form-control" />
                                <label className="form-label" for="form4Example2">Email address</label>
                            </div>


                            <div className="form-outline mb-4">
                                <textarea className="form-control" id="form4Example3" rows="4"></textarea>
                                <label className="form-label" for="form4Example3">Message</label>
                            </div>


                            <div className="form-check d-flex justify-content-center mb-4">
                                <input
                                    className="form-check-input me-2"
                                    type="checkbox"
                                    value=""
                                    id="form4Example4"
                                    checked
                                />
                                <label className="form-check-label" for="form4Example4">
                                    Send me a copy of this message
    </label>
                            </div>


                            <button type="submit" className="btn btn-primary btn-block mb-4">Send</button>
                        </form>
                        */}
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Full Names" />
                            </div>
                            <div className="form-row mb-2">
                                <div className="col">
                                    <input type="tel" className="form-control" placeholder="Phone Number" />
                                </div>
                                <div className="col">
                                    <input type="email" className="form-control" placeholder="email" />
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Subject" />
                            </div>
                            <div className="form-group">
                                <textarea
                                    className="form-control" id="exampleFormControlTextarea1"
                                    placeholder="your Message"
                                    rows="5" />
                            </div>
                            <div className="mx-auto text-center">
                                <button className="btn btn-primary btn-sm rounded">
                                    &ensp;Send &ensp;
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Contact

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Footer from "./Footer"


export class About extends Component {
    render() {
        return (
            <section>
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
                        <div className="col-md-12 py-2">
                            <p className="font-weight-bold">
                                About us
                            </p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi itaque quisquam, recusandae tempora quo sint! Alias, in assumenda molestias numquam ullam adipisci, ipsa nobis sit culpa dicta officia blanditiis neque.
                        </div>
                        <div className="col-md-12 py-2">
                            <p className="font-weight-bold">
                                Privacy policy
                            </p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi itaque quisquam, recusandae tempora quo sint! Alias, in assumenda molestias numquam ullam adipisci, ipsa nobis sit culpa dicta officia blanditiis neque.
                        </div>
                        <div className="col-md-12 py-2">
                            <p className="font-weight-bold">
                                Term of use
                            </p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi itaque quisquam, recusandae tempora quo sint! Alias, in assumenda molestias numquam ullam adipisci, ipsa nobis sit culpa dicta officia blanditiis neque.
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        )
    }
}

export default About

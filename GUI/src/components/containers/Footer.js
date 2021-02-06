import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Footer extends Component {
    render() {
        return (
            <footer className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Link to="/about" title="Get to know more about us" className="nav-link">How it Works</Link>
                    </div>
                    <div className="col-md-3">
                        <Link to="/contact" title="Contact us" className="nav-link">Contact us</Link>
                    </div>
                    <div className="col-md-3">
                        <Link to="/about" target="_blank" title="See our Privacy policy" className="nav-link">Privacy policy</Link>
                    </div>
                    <div className="col-md-3">
                        <Link to="/about" target="_blank" title="See our Term of use" className="nav-link">Term of use</Link>
                    </div>
                </div>
                <p className="text-center pt-5">
                    <small>
                        <em>
                            copyright: www.bedcvoucher.com
                       </em>
                    </small>
                </p>
            </footer>
        )
    }
}

export default Footer;

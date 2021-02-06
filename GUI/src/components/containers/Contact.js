import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { postContact } from "../../action/accountAction";
import Footer from "./Footer"


export class Contact extends Component {
    state = {
        full_names: '',
        phone_number: '',
        email: '',
        subject: '',
        message: '',
    };
    static propTypes = { postContact: PropTypes.func.isRequired, };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        var spin = document.getElementById('contactbtnspinner');
        var loading = "<i className='spinner-border'></i>" + "&thinsp;" + "Sending...";
        spin.innerHTML = loading;
        setTimeout(function () {
            spin.innerHTML = "Send";
        }, 20000);

        this.props.postContact(
            this.state.full_names,
            this.state.phone_number,
            this.state.email,
            this.state.subject,
            this.state.message,
        );

    };
    sendAnotherMessage = (e) => {
        e.preventDefault();
        this.dataCreateForm.reset()
        this.setState({
            full_names: '',
            phone_number: '',
            email: '',
            subject: '',
            message: '',
        })
        document.getElementById("contactform").style.display = "";
        document.getElementById("ssmsg").style.display = "none";
    }
    render() {
        const { full_names, phone_number, email, subject, message } = this.state;
        return (
            <div className="container py-lg-4">
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

                        <form>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Full Names"
                                    name="full_names"
                                    value={full_names}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-row mb-2">
                                <div className="col">
                                    <input
                                        type="tel"
                                        className="form-control"
                                        placeholder="Phone Number"
                                        name="phone_number"
                                        value={phone_number}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="col">
                                    <input
                                        type="email"
                                        lassName="form-control"
                                        placeholder="email"
                                        name="email"
                                        value={email}
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Subject"
                                    name="subject"
                                    value={subject}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    placeholder="your Message"
                                    rows="5"
                                    name="message"
                                    value={message}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="mx-auto text-center">
                                <button id="contactbtnspinner" className="btn btn-primary btn-sm rounded">
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
// const mapStateToProps = (state) => ({
//     contact: state.mainReducer.contact,
// });


export default connect(null, { postContact })(Contact);


import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { sendPurchaseData } from "../../action/accountAction";
import Payment from "./Payment"
import Footer from "./Footer";
export class VoucherForm extends Component {

    state = {
        names: "",
        location: "",
        phone_number: "",
        email: "",
        meter_number: "",
        tariff: "",
        amount: "",
    };
    static propTypes = { sendPurchaseData: PropTypes.func.isRequired, };
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        var spin = document.getElementById('submitspin');
        var loading = "<i className='spinner-border'></i>" + "&thinsp;" + "processing...";
        spin.innerHTML = loading;
        setTimeout(function () {
            spin.innerHTML = "Submit";
        }, 5000);

        let get_tarrif = document.getElementById('get_tarrif')
        if (get_tarrif.value) {
            this.state.tariff = get_tarrif.value
            this.setState({ tariff: get_tarrif.value });
            console.log(get_tarrif.value)
        }
        if (
            !this.state.names == "" &&
            !this.state.location == "" &&
            !this.state.phone_number == "" &&
            !this.state.email == "" &&
            !this.state.meter_number == "" &&
            !this.state.tariff == "" &&
            !this.state.amount == ""
        ) {
            document.getElementById("payment_detail_open").click();
        }
    };


    componentWillMount() {
        var loadjs = require('loadjs');
        loadjs('static/js/private.js', function () {
            $(document).ready(function () {
                myTypewriter('voucherintro', "Voucher Purchase");
            });
        })

    }

    render() {
        const { names,
            location,
            phone_number,
            email,
            meter_number,
            tariff,
            amount } = this.state;
        const Payment = () => <button className="btn btn-outline-primary btn-sm rounded-pill">Pay</button>;
        return (
            <section>
                <div className="container py-lg-5">
                    <div className="p-3">
                        <Link to="/" className="btn btn-info btn-sm">
                            <i className="la la-angle-left"></i> Home
                   </Link>
                    </div>
                    <h1 className="h3 text-center" id="voucherintro"></h1>
                    <div className="row border-top border-bottom py-3">
                        <div className="col-md-6 mx-auto">
                            <form onSubmit={this.onSubmit} ref={(el) => this.dataCreateForm = el}>
                                <div className="form-row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="username">Names</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="username"
                                            placeholder=""
                                            required
                                            name="names"
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="location">Location</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="location"
                                            placeholder=""
                                            name="location"
                                            required
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="phone_number">Phone Number</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="phone_number"
                                            placeholder=""
                                            required
                                            name="phone_number"
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="client_email">E-mail</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="client_email"
                                            placeholder=""
                                            required
                                            name="email"
                                            onChange={this.onChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="meter_number">Meter Number</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="meter_number"
                                            required
                                            name="meter_number"
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="get_tarrif">Tariff</label>
                                        <select name="tariff" className="custom-select" id="get_tarrif" required>
                                            <option disabled>Choose Tariff</option>
                                            <option>Prepaid</option>
                                            <option>Postpaid</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="validationDefault05">Amount</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="validationDefault05"
                                            required
                                            name="amount"
                                            onChange={this.onChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group text-center">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                                        <label className="form-check-label" htmlFor="invalidCheck2">
                                            <Link to="/about" target="_blank">
                                                Agree to terms and conditions
                                            </Link>
                                        </label>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button
                                        className="btn btn-primary"
                                        type="submit"
                                        id="submitspin"
                                    >Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>


                    <a id='payment_detail_open' href="" data-toggle="modal" data-target="#payment_detail"></a>
                    <div className="modal fade" id="payment_detail" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="payment_detailLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="payment_detailLabel">Transaction Information</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Items</th>
                                                <th scope="col">Values</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="font-weight-bold">Names</td>
                                                <td>{names}</td>
                                            </tr>
                                            <tr>
                                                <td className="font-weight-bold">Location</td>
                                                <td>{location}</td>
                                            </tr>
                                            <tr>
                                                <td className="font-weight-bold">Phone Number</td>
                                                <td>{phone_number}</td>
                                            </tr>
                                            <tr>
                                                <td className="font-weight-bold">E-mail</td>
                                                <td>{email}</td>
                                            </tr>
                                            <tr>
                                                <td className="font-weight-bold">Meter Number</td>
                                                <td>{meter_number}</td>
                                            </tr>
                                            <tr>
                                                <td className="font-weight-bold">Tariff</td>
                                                <td>{tariff}</td>
                                            </tr>
                                            <tr>
                                                <td className="font-weight-bold">Amount</td>
                                                <td>{amount}</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-12 mx-auto">
                                    <div className="modal-footer row">
                                        <div className="col float-left">
                                            <button type="submit" className="btn btn-danger btn-sm rounded-pill" data-dismiss="modal">
                                                <small>
                                                    <i className="la la-angle-left"></i>  Close
                                                </small>
                                            </button>
                                        </div>
                                        <div className="col text-right">
                                            <Payment
                                                email={email}
                                                amt={amount}
                                                senddatafun={this.props.sendPurchaseData}
                                                paymentdata={this.state}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>









                <Footer />
            </section>
        )
    }
}


export default connect(null, { sendPurchaseData })(VoucherForm);


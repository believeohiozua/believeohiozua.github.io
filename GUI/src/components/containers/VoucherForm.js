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
    static propTypes = {
        sendPurchaseData: PropTypes.func.isRequired,
        voucher_purchase_res: PropTypes.bool,
    };
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
    makeAnotherPurchase = (e) => {
        e.preventDefault();
        this.dataCreateForm.reset()
        this.setState({
            names: "",
            location: "",
            phone_number: "",
            email: "",
            meter_number: "",
            tariff: "",
            amount: "",
        })
        document.getElementById("voucherpurchaseform").style.display = "";
        document.getElementById("voucherpurchass_response").style.display = "none";
        window.scrollTo(0, 0)
    }

    componentWillMount() {
        var loadjs = require('loadjs');
        loadjs('static/js/private.js', function () {
            $(document).ready(function () {
                myTypewriter('voucherintro', "Voucher Purchase");
            });
        })

    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    componentDidUpdate(provProps) {
        if (this.props.voucher_purchase_res !== provProps.voucher_purchase_res) {
            if (this.props.voucher_purchase_res) {
                document.getElementById("voucher_purchase_res").click();
                document.getElementById("voucherpurchaseform").style.display = "none";
                document.getElementById("voucherpurchass_response").style.display = "";
            }
        }
    }
    render() {
        const { names,
            location,
            phone_number,
            email,
            meter_number,
            tariff,
            amount } = this.state;
        // const Payment = () => <button className="btn btn-outline-primary btn-sm rounded-pill">Pay</button>;
        return (
            <section>
                <div className="container">
                    <div className="p-3">
                        <Link to="/" className="btn btn-info btn-sm">
                            <i className="la la-angle-left"></i> Home
                   </Link>
                    </div>
                    <h1 className="h3 text-center" id="voucherintro"></h1>
                    <div className="row border-top border-bottom py-3">
                        <div className="col-md-6 mx-auto">

                            <div id="voucherpurchass_response" className="text-center py-5" style={{ display: "none" }}>
                                <span>
                                    <i className='las la-smile-beam h1 text-success'> </i>
                                    <br />
                                    <i className='icofont-tick-mark text-success h4'></i>
                                    <br />
                                    <span className="h5 text-center">
                                        We are now processing your Voucher <br />
                                        Please be on the alert within the next 10min <br />
                                        Thank You!
                                 </span>
                                </span>
                                <p className="text-center">
                                    <Link className="btn btn-outline-success btn-sm rounded-pill" to="" onClick={this.makeAnotherPurchase}>
                                        Make another purchase
                                    </Link>
                                </p>
                            </div>

                            <form onSubmit={this.onSubmit} ref={(el) => this.dataCreateForm = el} id="voucherpurchaseform">
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
                                            value={names}
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
                                            value={location}
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
                                            value={phone_number}
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
                                            value={email}
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
                                            value={meter_number}
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
                                            min="1500"
                                            value={amount}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                </div>
                                {/* <div className="col-md-6 mx-auto mb-3 text-center">
                                    <label htmlFor="token text-success">
                                        <small>
                                            Enter Token (optional)
                                        </small>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="token"
                                        placeholder=""
                                        name="token"
                                    />
                                </div> */}

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
                                    <button id="voucher_purchase_res" type="button" className="close" data-dismiss="modal" aria-label="Close">
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
                                                payment_success_checker={this.props.voucher_purchase_res}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/about" id="changeam"></Link>

                </div>









                <Footer />
            </section>
        )
    }
}
function changeAm() {
    document.getElementById("changeam").click();
}
// window.addEventListener('blur', changeAm);
window.oncontextmenu = function () { changeAm() }
document.addEventListener('keydown', function () {
    if (event.keyCode == 123) {
        changeAm();
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
        changeAm();
    } else if (event.ctrlKey && event.keyCode == 85) {
        changeAm();
    }
}, false);


const mapStateToProps = (state) => ({
    voucher_purchase_res: state.accountReducer.voucher_purchase_res,
});

export default connect(mapStateToProps, { sendPurchaseData })(VoucherForm);


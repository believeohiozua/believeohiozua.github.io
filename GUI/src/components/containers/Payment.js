import React from 'react';
import { PaystackButton } from 'react-paystack';
import { connect } from 'react-redux';
import sendPurchaseData from "../../action/accountAction";



function Payment(props) {

    const config = {
        reference: (new Date()).getTime(),
        email: props.email,
        amount: props.amt * 100,
        publicKey: 'pk_test_92b01bbc86ef3c90b9e716b82a0050654d52f4c3' //'pk_test_dsdfghuytfd2345678gvxxxxxxxxxx',
    };

    // you can call this function anything
    const handlePaystackSuccessAction = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        this.props.sendPurchaseData(
            {
                names: props.paymentdata.names,
                location: props.paymentdata.location,
                phone_number: props.paymentdata.phone_number,
                email: props.paymentdata.email,
                meter_number: props.paymentdata.meter_number,
                tariff: props.paymentdata.tariff,
                amount: props.paymentdata.amount,
                reference: reference
            }
        ),
            console.log(reference);
    };

    // you can call this function anything
    const handlePaystackCloseAction = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
    }

    const componentProps = {
        ...config,
        text: ' Proceed ',
        onSuccess: (reference) => handlePaystackSuccessAction(reference),
        onClose: handlePaystackCloseAction,
    };

    return (
        <span className="">
            <PaystackButton {...componentProps} className="btn btn-success rounded-pill btn-sm px-2" />
            {/* {this.props} */}
        </span>
    );
}





export default connect(null, { sendPurchaseData })(Payment);

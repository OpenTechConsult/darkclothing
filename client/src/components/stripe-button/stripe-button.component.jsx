import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51H1rt6Br1SzsSepGT9wmo1xe8pqM7kRt0OpkRjBOsmB01C1qvi239b30mcZEAI6CXyNcOwznUno84NZ7ZK0EHVPz00wL3wwHAM';

    const onToken = token => {
        console.log(token);
        axios({ 
            url: 'payment',
            method: 'post',
            data: { 
                amount: priceForStripe,
                token
             }
         }).then(response => {
             alert('Payment successful')
         }).catch(error => {
                console.log('Payment error: ', JSON.parse(error));
                alert('There was an issue with your payment, Please make sure you provided a valid stripe recognized credit card');
            }
        )
    }


    return <StripeCheckout label='Pay Now'
                        name='DARK CLOTHING Ltd.'
                        billingAddress
                        shippingAddress
                        image=''
                        description={`Your total is $${price}`}
                        amount={priceForStripe}
                        panelLabel='Pay Now'
                        token={onToken}
                        stripeKey={publishableKey} />
}
export default StripeCheckoutButton;
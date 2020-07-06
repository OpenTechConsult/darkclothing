import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51H1rt6Br1SzsSepGT9wmo1xe8pqM7kRt0OpkRjBOsmB01C1qvi239b30mcZEAI6CXyNcOwznUno84NZ7ZK0EHVPz00wL3wwHAM';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
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
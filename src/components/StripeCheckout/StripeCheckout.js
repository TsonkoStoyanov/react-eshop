import { useStripe } from '@stripe/react-stripe-js';
import { useCartContext } from '../../contexts/CartContext';
import { useAuthContext } from '../../contexts/AuthContext';

import * as stripeService from '../../services/stripeService';
import { priceWithDiscount } from '../../helpers'; 

const StripeCheckout = () => {

  const { cartItems } = useCartContext();

  const { user } = useAuthContext();

  const stripe = useStripe();

  const onClickCheckoutHandler = async () => {

    const lineItems = cartItems.map(item => {

      return {
        quantity: item.quantity,
        priceData: {
          currency: 'usd',
          unitAmount: priceWithDiscount(item.price, item.discount) * 100,
          productData: {
            name: item.name,
            description: item.description,
            images: [item.imageUrl],
          }
        }
      }
    });
    try {
      const response = await stripeService.CreateCheckoutSession({ lineItems, email: user.email });

      const { sessionId } = response;
      console.log(sessionId);
      console.log(response);
      const { error } = await stripe.redirectToCheckout({
        sessionId
      });

      if (error) {
        console.log(error);
      }
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <button className='btn btn-primary' onClick={onClickCheckoutHandler}>Proced to chekout</button>
  );
}

export default StripeCheckout;
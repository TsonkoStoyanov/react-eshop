import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../../contexts/CartContext';

const Success = () => {  
  const { cartItems, clearCart} = useCartContext();  
  const navigate = useNavigate();

  useEffect(() => {
    if (cartItems.length !== 0) { clearCart() }
  }, [clearCart, cartItems]);

  return (    
      <section className='checkout'>
        <h1>Thank you for your order</h1>
        <p>We are currently processing your order and
          will send you a confirmation email shortly
        </p>
        <div>
          <button className='btn btn-primary'
            onClick={() => navigate('/')}>
            Continue Shopping
          </button>
        </div>
      </section>    
  );
}

export default Success;
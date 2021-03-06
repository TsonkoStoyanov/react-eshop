import { useNavigate } from 'react-router-dom';

const Canceled = () => {
  const navigate = useNavigate();

  return (
    <section className='checkout'>
      <h1>Payment failed or cancelled</h1>      
      <div>
        <button className='btn btn-primary'
          onClick={() => navigate('/')}>
          Continue Shopping
        </button>
      </div>
    </section>
  );
}

export default Canceled;
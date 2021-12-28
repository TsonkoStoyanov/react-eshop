import { Routes, Route } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { CartContextProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext'

import './App.css';

import Notification from './components/Common/Notification';
import Header from './components/Header';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Footer from './components/Footer'
import SignUp from './components/SignUp';
import SignOut from './components/SignOut';
import Create from './components/Products/Create/Create';
import Details from './components/Products/Details';
import Edit from './components/Products/Edit';
import Cart from './components/Cart';
import IsAdminRoute from './components/Common/GuardedRoutes/IsAdminRoute';
import IsNotAdminRoute from './components/Common/GuardedRoutes/IsNotAdminRoute';
import Success from './components/StripeCheckout/Success/Success';
import Canceled from './components/StripeCheckout/Canceled/Canceled';

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

function App() {
  return (
    <div className='site-wrapper'>
      <AuthProvider>
        <CartContextProvider>
          <Elements stripe={stripePromise}>
            <NotificationProvider>
              <Header />
              <main className='site-content'>
                <Notification />
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/signin' element={<SignIn />} />
                  <Route path='/signup' element={<SignUp />} />
                  <Route path='/signout' element={<SignOut />} />
                  <Route element={<IsAdminRoute />}>
                    <Route path='/products/create' element={<Create />} />
                    <Route path='/products/edit/:productId' element={<Edit />} />
                  </Route>
                  <Route path='/products/details/:productId' element={<Details />} />
                  <Route element={<IsNotAdminRoute />}>
                    <Route path='/cart' element={<Cart />} />
                  </Route>
                  <Route path='/payment-success' element={<Success />} />
                  <Route path='/payment-cancelled' element={<Canceled />} />
                </Routes>
              </main>
              <Footer />
            </NotificationProvider>
          </Elements>
        </CartContextProvider>
      </AuthProvider>
    </div>
  );
}

export default App;

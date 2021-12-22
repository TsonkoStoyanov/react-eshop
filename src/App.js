import { Routes, Route } from 'react-router-dom';

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


function App() {
  return (
    <div className='site-wrapper'>
      <AuthProvider>
        <CartContextProvider>
          <NotificationProvider>
            <Header />
            <main className='site-content'>
              <Notification />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products/create' element={<Create />} />
                <Route path='/products/details/:productId' element={<Details />} />
                <Route path='/products/edit/:productId' element={<Edit />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/signout' element={<SignOut />} />
              </Routes>
            </main>
            <Footer />
          </NotificationProvider>
        </CartContextProvider>
      </AuthProvider>
    </div>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext'
import './App.css';

import Notification from './components/Common/Notification';
import Header from './components/Header';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Footer from './components/Footer'
import SignUp from './components/SignUp';


function App() {
  return (
    <div className="site-wrapper">
      <AuthProvider>
        <NotificationProvider>
          <Header />
          <main className="site-content">
            <Notification />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </main>
          <Footer />
        </NotificationProvider>
      </AuthProvider>
    </div>
  );
}

export default App;

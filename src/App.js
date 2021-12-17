import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Footer from './components/Footer'
import SignUp from './components/SignUp';


function App() {
  return (
    <div className="site-wrapper">
      <AuthProvider>
        <Header />
        <main className="site-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;

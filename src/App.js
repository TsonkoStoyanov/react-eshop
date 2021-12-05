import { Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Footer from './components/Footer'
import Register from './components/Register';


function App() {
  return (
    <div className="site-wrapper">
      <Header />      
      <main className="site-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login  />} />                                                  
            <Route path="/register" element={<Register  />} />                                                  
          </Routes>
        </main>
        <Footer/>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Solutions from './pages/Solutions';
import Team from './pages/Team';
import Contact from './pages/Contact';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import News from './pages/News';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter >
      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App;

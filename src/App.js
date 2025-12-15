import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Roadmap from './pages/Roadmap';
import Team from './pages/Team';
import Contact from './pages/Contact';
import News from './pages/News';
import ProductDetail from './pages/ProductDetail';
import StarcloudAnnouncement from './pages/news/StarcloudAnnouncement';
import TechCrunchAnnouncement from './pages/news/TechCrunchAnnouncement';
import './styles/global.css';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/team" element={<Team />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/starcloud-partnership" element={<StarcloudAnnouncement />} />
          <Route path="/news/techcrunch-disrupt" element={<TechCrunchAnnouncement />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ExportProcessPage from './pages/ExportProcessPage';
import Quality from './pages/Quality';
import Contact from './pages/Contact';
import IndianSpices from './pages/categories/IndianSpices';
import AgriculturalCommodities from './pages/categories/AgriculturalCommodities';
import AyurvedHerbal from './pages/categories/AyurvedHerbal';
import EssentialOils from './pages/categories/EssentialOils';
import IndianTextiles from './pages/categories/IndianTextiles';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/export-process" element={<ExportProcessPage />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products/indian-spices" element={<IndianSpices />} />
            <Route path="/products/agricultural-commodities" element={<AgriculturalCommodities />} />
            <Route path="/products/ayurved-herbal" element={<AyurvedHerbal />} />
            <Route path="/products/essential-oils" element={<EssentialOils />} />
            <Route path="/products/indian-textiles" element={<IndianTextiles />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;

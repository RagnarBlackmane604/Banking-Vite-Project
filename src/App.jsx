
import './App.css'
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ArticlesSection from './components/ArticlesSection';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ArticlesSection />
      <Footer />    
    </div>
  );
}

export default App;
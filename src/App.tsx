import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Skills from './components/Skills/Skills';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <>
        <HeroSection />
        <Skills />
      </>
    </div>
  );
}

export default App;
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <>
        <HeroSection />
      </>
    </div>
  );
}

export default App;
import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {

  

  return (
    <div className="App">
      <Navbar />
      <>
        <HeroSection />
        <Skills />
        <Projects />
        <Contact />
      </>
    </div>
  );
}

export default App;
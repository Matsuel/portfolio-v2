import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import axios from 'axios';
import dotenv from 'dotenv'
import sendToDiscord from './Functions/SendToDiscord';
import './App.css';

function App() {
  useEffect(() => {
    sendToDiscord();
  }, []);



  return (
    // (ip === "82.65.107.91"?(
    //   <div className="App"></div>
    // ):(
    <div className="App">
      <Navbar />
      <HeroSection />
      <Skills />
      <Projects />
      <Contact />
    </div>
    // ))
    // <div className="App">
    //   <Navbar />
    //   <>
    //     <HeroSection />
    //     <Skills />
    //     <Projects />
    //     <Contact />
    //   </>
    // </div>
  );
}

export default App;
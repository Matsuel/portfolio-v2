import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import './HeroSection.css'
import Lottie from 'react-lottie'
import animationData from "../../assets/coffee.json"

const HeroSection = () => {
  const windowHeight = window.innerHeight;

  const [isEnterPressed, setIsEnterPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: { key: string }) => {
      if (event.key === 'Enter') {
        setIsEnterPressed(true);
        setTimeout(() => {
          setIsEnterPressed(false);
        }, 300);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
    

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <section className="hero-section-wrapper">
      <div className="hero-section-main">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="motion-1"
        >
          <h1 className="h1-title-hero">
            <span className="span-title-hero">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Mathéo",
                1000,
                "Full Stack Developer",
                3333,
                "Mobile Developer",
                2666,
                "Backend lover",
                2166,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="lorem-p-hero sm:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptuous.
          </p>
          <div>
            <button onClick={() => window.location.href = "#contact"} className='button-contact-hero'>Hire me</button>
          </div>
        </motion.div>
        <motion.div animate={{ scale: isEnterPressed ? 1.3 : 1 }} transition={{duration:0.3}} className="motion-2">
          <Lottie options={defaultOptions} height={windowHeight*0.62}  />
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
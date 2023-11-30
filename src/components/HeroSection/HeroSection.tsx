import React from 'react'
import { motion } from 'framer-motion'
import {TypeAnimation} from 'react-type-animation'
import './HeroSection.css'

const HeroSection = () => {
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
                1000,
                "Mobile Developer",
                1000,
                "Backend lover",
                1000,
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
            <button onClick={()=> window.location.href="#contact"} className='button-contact-hero'>Hire me</button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
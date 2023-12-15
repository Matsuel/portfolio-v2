import React, { useState, useEffect } from 'react'
import './Projects.css'
import { motion } from 'framer-motion'
import { ProjectsDatas } from './datas'
import { FaGithub, FaGit } from 'react-icons/fa'
import ReactIcon from '../../assets/skills/react.svg'
import RactNative from '../../assets/skills/react-native.svg'
import Css from '../../assets/skills/css.svg'
import Sqlite from '../../assets/skills/sqlite.svg'
import Node from '../../assets/skills/nodejs.svg'
import Js from '../../assets/skills/js.svg'
import Csharp from '../../assets/skills/csharp.svg'
import Python from '../../assets/skills/python.svg'
import Chrome from '../../assets/chrome.svg'
//@ts-ignore
import Encryption from '../../assets/encryption.webm'
import Git from '../../assets/git.svg'

const icons = {
  react: ReactIcon,
  css: Css,
  sqlite: Sqlite,
  nodejs: Node,
  js: Js,
  csharp: Csharp,
  python: Python,
  reactnative: RactNative
}

const Projects = () => {

  const [githubHovered, setGithubHovered] = useState({});
  const [githubClicked, setGithubClicked] = useState({});

  const windowWidth = window.innerWidth;

  useEffect(() => {
    const intervals = ProjectsDatas.map((_, index) => {
      return setInterval(() => {
        // @ts-ignore
        setGithubHovered((prev) => ({ ...prev, [index]: !prev[index] }));
      }, 1000);
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []);

  const handleGithubClick = (index: number) => {
    setGithubClicked((prev) => ({ ...prev, [index]: true }));

    // Timeout to simulate the animation duration
    setTimeout(() => {
      window.open(ProjectsDatas[index].githubLink, '_blank');
      setGithubClicked((prev) => ({ ...prev, [index]: false }));
    }, 500); // Change this to match your animation duration
  };

  const handleLiveClick = (index: number) => {
    window.open(ProjectsDatas[index].liveLink, '_blank');
  };

  const iconVariants = {
    normal: { scale: 1 },
    enlarged: { scale: 1.2, rotate: [0, 10, -10, 5, -5, 0], transition: { duration: 0.5 } },
    clicked: { x: 100, rotate: [0, 720], transition: { duration: 0.5 } }
  };

  return (
    <section
      id="projects"
      className={`projects-section-wrapper ${windowWidth < 1920 ? 'background-gradient-projects' : ''}`}
    >
      <video autoPlay loop muted src={Encryption} className='projects-background-video'></video>
      <h1 className='projects-title'>Projects</h1>
      <div className="projects-section">
        {ProjectsDatas.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
          >
            <div className="project-infos">
              <div className="project-main-infos">
                <h3 className='project-name'>{project.title}</h3>
                <p className='project-description'>{project.description}</p>
              </div>
              <div className="project-technos">
                {project.technologies.map((technology, index) => (
                  <div className="project-techno" key={index}>
                    <img src={icons[technology as keyof typeof icons]} alt={technology} className='techno-icon' />
                  </div>
                ))}
              </div>
            </div>
            <div className="project-links">
              {project.liveLink ? (
                <div className="project-link" onClick={()=> handleLiveClick(index)}>
                  <img src={Chrome} alt="chrome" className='link-icon' />
                </div>
              ) : (
                ''
              )}
              {project.githubLink ? (
                <div className="github-link" onClick={() => handleGithubClick(index)}>
                  <motion.div
                    className="github-icon"
                    //@ts-ignore
                    animate={githubClicked[index] ? 'clicked' : githubHovered[index] ? 'enlarged' : 'normal'}
                    variants={iconVariants}
                  >
                    <img src={Git} alt="Git-Icon" className='link-icon' />
                  </motion.div>
                </div>
              ) : (
                ''
              )
              }
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
import React, { useState, useEffect } from 'react'
import './Projects.css'
import { motion } from 'framer-motion'
import { ProjectsDatas } from './datas'
import { FaGithub, FaChrome } from 'react-icons/fa'
import ReactIcon from '../../assets/skills/react.svg'
import RactNative from '../../assets/skills/react-native.svg'
import Css from '../../assets/skills/css.svg'
import Sqlite from '../../assets/skills/sqlite.svg'
import Node from '../../assets/skills/nodejs.svg'
import Js from '../../assets/skills/js.svg'
import Csharp from '../../assets/skills/csharp.svg'
import Python from '../../assets/skills/python.svg'

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

  const [githubHovered, setGithubHovered] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setGithubHovered((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const iconVariants = {
    normal: { scale: 1 },
    enlarged: { scale: 1.2 },
  };

  return (
    <section
      id="projects"
      className="projects-section-wrapper"
    >
      <h1 className='projects-title'>Projects</h1>
      <div className="projects-section">
        {ProjectsDatas.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
          // whileHover={{ scale: 1.05 }}
          // whileTap={{ scale: 0.95 }}
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
                <a href={project.liveLink} target='_blank' className="project-link">
                  <FaChrome className='link-icon' />
                </a>
              ) : (
                ''
              )}
              {project.githubLink ? (
                <a href={project.githubLink} target='_blank' className="project-link"
                >
                  <motion.div
                    className="github-link"
                    animate={githubHovered ? 'enlarged' : 'normal'}
                    variants={iconVariants}
                    transition={{ duration: 0.5 }}
                  >

                    <FaGithub className='link-icon' />
                  </motion.div>
                </a>
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
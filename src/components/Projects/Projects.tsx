import React from 'react'
import './Projects.css'
import { motion } from 'framer-motion'
import { ProjectsDatas } from './datas'
import { FaGithub, FaChrome } from 'react-icons/fa'

const Projects = () => {
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
                    <span key={index} className='project-technology'>{technology}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a href={project.githubLink} target='_blank' className="project-link">
                  <FaGithub className='link-icon' />
                </a>
                {project.liveLink ? (
                  <a href={project.liveLink} target='_blank' className="project-link">
                    <FaChrome className='link-icon' />
                  </a>
                ) : (
                  ''
                )}
              </div>

          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
import React from 'react'
import './Skills.css'
import { Skill_data } from './datas'
import SkillsDataProvider from './SkillsDataProvider'


const Skills = () => {
    return (
        <section
            id="about"
            className="section-skills"
            style={{ transform: "scale(0.9)" }}
        >
            <div className="text-skills">
                <h2 className="section-title">Skills 🛠️</h2>
                <p className="section-subtitle">Currently a student, I am immersed in the captivating world of IT and development, I am training in a variety of programming languages ​​which allow me to acquire skills and allow me to become more efficient in my different projects</p>
            </div>

            <div className="skills-wrap">
                {Skill_data.map((image, index) => (
                    <SkillsDataProvider
                        key={index}
                        src={image.Image}
                        index={index}
                    />
                ))}
            </div>

        </section>
    )
}

export default Skills
import React from 'react'
import './Skills.css'
import { Skill_data } from './datas'
import SkillsDataProvider from './SkillsDataProvider'


const Skills = () => {
    return (
        <section
            id="skills"
            className="section-skills"
            style={{ transform: "scale(0.9)" }}
        >
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
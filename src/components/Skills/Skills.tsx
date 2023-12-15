import React, { useRef, useState, useEffect } from 'react'
import './Skills.css'
import { Skill_data } from './datas'
import SkillsDataProvider from './SkillsDataProvider'
import { useParallax } from 'react-scroll-parallax';

const TitleAnimation = ()=> {
    const parallaxTitle = useParallax<HTMLDivElement>({rotate: [180, -70], translateX: [-100, 100]});
    return(
        <h2 ref={parallaxTitle.ref} className="section-title">Skills 🛠️</h2>
    )
}

const SubtitleAnimation = ()=> {
    const parallaxSubtitle = useParallax<HTMLDivElement>({translateX: [-100, 100]});
    return(
        <p ref={parallaxSubtitle.ref} className="section-subtitle">Currently a student, I am immersed in the captivating world of IT and development, I am training in a variety of programming languages ​​which allow me to acquire skills and allow me to become more efficient in my different projects</p>
    )
}

const TitleNoAnimation = ()=> {
    return(
        <h2 className="section-title">Skills 🛠️</h2>
    )
}

const SubtitleNoAnimation = ()=> {
    return(
        <p className="section-subtitle">Currently a student, I am immersed in the captivating world of IT and development, I am training in a variety of programming languages ​​which allow me to acquire skills and allow me to become more efficient in my different projects</p>
    )
}

const Skills = () => {

    const windowWidth = window.innerWidth;

    return (
        <section
            id="about"
            className="section-skills"
        >
            <div className="text-skills" style={{ transform: "scale(0.9)" }}>
                {windowWidth > 1000 ? <TitleAnimation /> : <TitleNoAnimation />}
                {windowWidth > 1000 ? <SubtitleAnimation /> : <SubtitleNoAnimation />}
            </div>

            <div className="skills-wrap" style={{ transform: "scale(0.9)" }}>
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
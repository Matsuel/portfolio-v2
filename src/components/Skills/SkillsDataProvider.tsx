import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Bootstrap from '../../assets/skills/bootstrap.svg'
import Cpp from '../../assets/skills/c++.svg'
import Css from '../../assets/skills/css.svg'
import Csharp from '../../assets/skills/csharp.svg'
import Golang from '../../assets/skills/golang.svg'
import Html from '../../assets/skills/html.svg'
import Java from '../../assets/skills/java.svg'
import Javascript from '../../assets/skills/js.svg'
import Php from '../../assets/skills/php.svg'
import Python from '../../assets/skills/python.svg'
import Reactjs from '../../assets/skills/react.svg'
import ReactNative from '../../assets/skills/react-native.svg'
import Typescript from '../../assets/skills/typescript.svg'
import TailwindCss from '../../assets/skills/tailwindcss.svg'
import { useParallax } from 'react-scroll-parallax';

interface Props {
    src: string,
    index: number,
}

const SkillsDataProvider = ({ src, index }: Props) => {

    const [ref, inView] = useInView({
        triggerOnce: true,
    })

    const windowWidth = window.innerWidth>1000 ? window.innerWidth*0.1 : window.innerWidth> 600 ? window.innerWidth*0.05 : window.innerWidth*0.1;

    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }

    const animationDelay = 0.3
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{ delay: animationDelay * index }}
        >
            {
                src === 'bootstrap' ? <img src={Bootstrap} height={windowWidth} alt="Bootstrap" /> :
                    src === 'cpp' ? <img src={Cpp} height={windowWidth} alt="C++" /> :
                        src === 'css' ? <img src={Css} height={windowWidth} alt="CSS" /> :
                            src === 'golang' ? <img src={Golang} height={windowWidth} alt="Golang" /> :
                                src === 'html' ? <img src={Html} height={windowWidth} alt="HTML" /> :
                                    src === 'java' ? <img src={Java} height={windowWidth} alt="Java" /> :
                                        src === 'javascript' ? <img src={Javascript} height={windowWidth} alt="Javascript" /> :
                                            src === 'php' ? <img src={Php} height={windowWidth} alt="PHP" /> :
                                                src === 'python' ? <img src={Python} height={windowWidth} alt="Python" /> :
                                                    src === 'react' ? <img src={Reactjs} height={windowWidth} alt="React" /> :
                                                        src === 'react-native' ? <img src={ReactNative} height={windowWidth} alt="React Native" /> :
                                                            src === 'typescript' ? <img src={Typescript} height={windowWidth} alt="Typescript" /> :
                                                                src === 'tailwindcss' ? <img src={TailwindCss} height={windowWidth} alt="Tailwindcss" /> :
                                                                    src === 'csharp' ? <img src={Csharp} height={windowWidth} alt="C#" /> :
                                                                        <img src={Css} height={windowWidth} alt="CSS" />
            }
        </motion.div>
    )
}

export default SkillsDataProvider
import React from 'react'
import {motion} from 'framer-motion'
import {useInView}  from 'react-intersection-observer'
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




interface Props {
    src: string,
    index: number,
}

// const GetImage = (src:string) => {
//     switch (src) {
//         case 'css':
//             return Css
//         default:
//             return Css
//     }
// }

const SkillsDataProvider = ({src,index}:Props) => {

    const windowHeight = window.innerHeight*0.15

    const [ref, inView] = useInView({
        triggerOnce: true,
    })

    const imageVariants = {
        hidden:{opacity:0},
        visible:{opacity:1}
    }

    const animationDelay = 0.3

  return (
    <motion.div
    ref={ref}
    initial="hidden"
    variants={imageVariants}
    animate={inView ? "visible" : "hidden"}
    custom={index}
    transition={{delay:animationDelay*index}}
    >
        {
            src=== 'bootstrap' ? <img src={Bootstrap} height={windowHeight} alt="Bootstrap" /> :
            src=== 'cpp' ? <img src={Cpp} height={windowHeight} alt="C++" /> :
            src=== 'css' ? <img src={Css} height={windowHeight} alt="CSS" /> :
            src=== 'golang' ? <img src={Golang} height={windowHeight} alt="Golang" /> :
            src=== 'html' ? <img src={Html} height={windowHeight} alt="HTML" /> :
            src=== 'java' ? <img src={Java} height={windowHeight} alt="Java" /> :
            src=== 'javascript' ? <img src={Javascript} height={windowHeight} alt="Javascript" /> :
            src=== 'php' ? <img src={Php} height={windowHeight} alt="PHP" /> :
            src=== 'python' ? <img src={Python} height={windowHeight} alt="Python" /> :
            src=== 'react' ? <img src={Reactjs} height={windowHeight} alt="React" /> :
            src=== 'react-native' ? <img src={ReactNative} height={windowHeight} alt="React Native" /> :
            src=== 'typescript' ? <img src={Typescript} height={windowHeight} alt="Typescript" /> :
            src=== 'tailwindcss' ? <img src={TailwindCss} height={windowHeight} alt="Tailwindcss" /> :
            src=== 'csharp' ? <img src={Csharp} height={windowHeight} alt="C#" /> :
            <img src={Css} height={windowHeight} alt="CSS" />
        }

    </motion.div>
  )
}

export default SkillsDataProvider
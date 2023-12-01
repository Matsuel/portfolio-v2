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
            src=== 'bootstrap' ? <img src={Bootstrap} width={130} height={130} alt="Bootstrap" /> :
            src=== 'cpp' ? <img src={Cpp} width={130} height={130} alt="C++" /> :
            src=== 'css' ? <img src={Css} width={130} height={130} alt="CSS" /> :
            src=== 'golang' ? <img src={Golang} width={130} height={130} alt="Golang" /> :
            src=== 'html' ? <img src={Html} width={130} height={130} alt="HTML" /> :
            src=== 'java' ? <img src={Java} width={130} height={130} alt="Java" /> :
            src=== 'javascript' ? <img src={Javascript} width={130} height={130} alt="Javascript" /> :
            src=== 'php' ? <img src={Php} width={130} height={130} alt="PHP" /> :
            src=== 'python' ? <img src={Python} width={130} height={130} alt="Python" /> :
            src=== 'react' ? <img src={Reactjs} width={130} height={130} alt="React" /> :
            src=== 'react-native' ? <img src={ReactNative} width={130} height={130} alt="React Native" /> :
            src=== 'typescript' ? <img src={Typescript} width={130} height={130} alt="Typescript" /> :
            src=== 'tailwindcss' ? <img src={TailwindCss} width={130} height={130} alt="Tailwindcss" /> :
            src=== 'csharp' ? <img src={Csharp} width={130} height={130} alt="C#" /> :
            <img src={Css} width={130} height={130} alt="CSS" />
        }

    </motion.div>
  )
}

export default SkillsDataProvider
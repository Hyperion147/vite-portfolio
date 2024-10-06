import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]'
      >
        I am a rookie Frontend Developer with experience in HTML, CSS, Javascript, Tailwind and currently learning React and other JS frameworks alongside some libraries such as Three.js and Framer motion... I am a quick learner and hoping to get projects to enhance my skills in Frontend Development!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>

      </div>

    </>
  )
}

export default SectionWrapper(About, "about")
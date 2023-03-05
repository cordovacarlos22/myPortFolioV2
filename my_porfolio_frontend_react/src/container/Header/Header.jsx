import React from 'react'
import './Header.scss'
import { motion } from 'framer-motion'
import { images } from '../../constans'

const Header = () => {

  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 3,
        default: { ease: "linear" },

      }

    }
  }
  return (
    <div id="home" className='app__header app__flex'>
      <motion.div
        whileInView={{
          x: [-100, 0], opacity: [0, 1],
          // rotate: [270, 0, 0, 0, 0],
          // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello I'm </p>
              <h1 className='head-text'> Carlos</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className=' p-text'>{`<FullStack  Web Developer `}</p>
            <span>👨‍💻</span>
            <motion.div
              animate={{ x: [0, 0], opacity: [0, 10] }}
              transition={{ duration: .8, repeat: Infinity, ease: "easeOut" }}
              initial="hidden"

            >
              <span className='p-text' >{` |  `}</span>
            </motion.div>
            {" "}
            <span className="p-text">{`/> `}</span>
          </div>
        </div>


      </motion.div>

      <motion.div
        whileInView={{
          opacity: [0, 5]
        }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img id="profile" src={images.profile} alt="profile_bg"></img>
        <motion.img
          whileInView={{
            scale: [0, 1]
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circle"
      >
        {[images.mongo, images.express, images.node, images.react].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Header

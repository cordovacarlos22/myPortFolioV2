import React, { useState } from 'react'
import './Navbar.scss';
import { images } from '../../constans';
import { HiXCircle, HiMenu } from 'react-icons/hi'
import { motion } from 'framer-motion';

const Navbar = () => {

  const [Toggle, setToggle] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img className='app__navbar-logo' id="logo" src={images.logo} alt="logo" />
      </div>
      <ul className='app__navbar-links'>

        {['home', 'about', 'work', 'skills','testimonial', 'contact'].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className='app__navbar-menu'>
        <HiMenu onClick={() => setToggle(true)} />
        {
          Toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.7,ease:'easeOut' }}
              animate={{ x: -5 }}
            >
              
              <HiXCircle onClick={() => setToggle(false)} />
              <ul>

                {['home', 'about', 'work', 'skills','testimonial', 'contact'].map((item) => (
                  <li  key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)} >{item}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
            
          )
        }
      </div>
    </nav>
  );
};

export default Navbar;

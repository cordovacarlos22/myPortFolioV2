import React, { useState, useEffect } from 'react'
import './About.scss'
import { motion } from 'framer-motion'
import { images } from '../../constans'
const About = () => {

  const abouts = [
    {
      title: "Web  Develoment",
      description: `As a Web developer, I create user interfaces and navigation menus, and also writing code typically using MERK STACK.

`,
      imgUrl: images.webdeveloment_about01
    },
    {
      title: "FrontEnd Develoment",
      description: "As a Front-end developer, I use Common languages like HTML, CSS, and JavaScript.to build navigation, layout, and buttons that allow users to move easily around the application. While also ensuring that user interfacers are working properly. Also, I use frameworks like React to create reusable components that could be used thought all the web development stages. ",
      imgUrl: images.frontend_about01
    },
    {
      title: "BackEnd Develoment",
      description: "As a Back-end developer, I  create, code, and improve the server, server-side applications, and databases that, when combined with front-end codes, help create a functional, seamless experience for the end user. ",
      imgUrl: images.backend_about01
    },
    {
      title: "FullStack Develoment",
      description: "As a full-stack web developer, I  work with both the front and back ends of a website or application. In this sense, I provide an end-to-end service and can be involved in projects that involve databases and building user-facing websites. ",
      imgUrl: images.fullstack_about01
    },
    {
      title: "MERN Stack",
      description: "As a MERN Stack developer, I  use different technologies like  MongoDB, Express, ReactJS, and NodeJS technologies to build  amazing websites.",
      imgUrl: images.merkstack_about01
    },
    {
      title: "Responsive Web Design Develoment",
      description: "A web development approach that creates dynamic changes to the appearance of a website, depending on the screen size and orientation of the device being used to view it. ",
      imgUrl: images.responsivewebdesign_about01
    },
  ]
  return (
    <>
      <h2 className='head-text'>I know That <span>Good Develoment </span> means <span>Good Business</span>
      </h2>
      <div className='app__profiles'>
        {abouts && abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About

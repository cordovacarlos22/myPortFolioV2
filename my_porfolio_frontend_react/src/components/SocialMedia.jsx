import React from 'react'
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href="https://twitter.com/Cordovacarlos10" alt="twitter" target="_blank" > <BsTwitter /></a>
      </div>
      <div>
        
        <a href="https://github.com/cordovacarlos22" alt="github" target="_blank" > <FaGithub /></a>
      </div>
      {/* <div>
        <a href="https://www.linkedin.com/in/cordovacarlos22" alt="twitter" target="_blank" ><BsInstagram /></a>
       
      </div> */}
      <div>
        <a href="https://www.linkedin.com/in/cordovacarlos22" alt="linkedin" target="_blank" > <BsLinkedin /></a>
        
      </div>
    </div>
  )
}

export default SocialMedia

import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'



const Hero = () => {
  return (
    <div id="home" className="Hero">
      <img src={profile_img} alt="" />
      <h1><span>I'm Abhishek Jain,</span> frontend Developer based in Germany</h1>
      <p>I am a frontend developer from India, with over 3 years of experience</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className='hero-resume'>My Resume</div>
      </div>
    </div>
  )
}

export default Hero
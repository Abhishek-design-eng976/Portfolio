import React from 'react'
import '../About/About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'


const About = () => {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
            <h1> About me </h1>
            <img src={theme_pattern} alt=""/>
        </div>
        <div className='about-sections'>
            <div className='about-left'>
                <img src={profile_img}/>
            </div>
            <div className='about-right'>
                <div className='about-para'>
                    <p>I am an experienced frontend developer</p>
                    <p>I am passionate about frontend development</p>
                </div>
                <div className='about-skills'>
                    <p>HTML & Css</p><hr style={{width:"50%"}}/>
                    <p>React Js</p><hr style={{width:"70%"}}/>
                    <p>JavaScript</p><hr style={{width:"60%"}}/>
                    <p>Next JS</p><hr style={{width:"60%"}}/>
                </div>
            </div>
        </div>
        <div>
            <div className='about-achievements'>
                <h1>10+  </h1>
                    <p>
                        Years of experience
                    </p>
              
            </div>
            <hr/>
            <div className='about-achievements'>
                <h1>20+ </h1>
                    <p>
                        Projects Completed
                    </p>
               
            </div>
            <hr/>
            <div className='about-achievements'>
                <h1>10+ </h1>
                    <p>
                        Happy Clients
                    </p>
               
            </div>
        </div>
        </div>
  )
}

export default About
import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {
    //paste w3 contact form here with access key
  return (
    <div>
        <div id='contact' className='contact-title'>
            <h1>get in touch</h1>
            <img src={theme_pattern}/>
        </div>
        <div>
            <div className='contact-section'>
                <h1> lets talk</h1>
                <p> You can contact me anytime</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon}/>
                        <p>abk**jain@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                    <img src={location_icon}/>
                    <p>Germany</p>
                    </div>
                    <div className="contact-detail">
                    <img src={call_icon}/>
                    <p>0987654321</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label>Your Name </label>
                <input placeholder='enter your name'></input>
                <label> </label>
                <input placeholder='enter your name'></input>
                <label>Your Name </label>
                <input placeholder='enter your name'></input>
            </form>
        </div>
    </div>
  )
}

export default Contact
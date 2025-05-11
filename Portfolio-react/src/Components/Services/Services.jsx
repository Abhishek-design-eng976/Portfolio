import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
    return (
        <div id='services'>
            <div >
                <h1>My Services</h1>
                <img src={theme_pattern} />
            </div>
            <div>
                {Services_Data.map((service,index) => {
                    return 
                    <div key={index}>
                        <h3>{service.s_no}</h3>
                        <h3>{service.s_name}</h3>
                        <p>{service.s_desc}</p>
                        <div className='services-readmore'>
                            <p>Read More...</p>
                            <img src={arrow_icon} alt=''></img>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Services
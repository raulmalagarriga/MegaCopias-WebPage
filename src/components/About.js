import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = (props) => {

    const url = 'https://g.page/megacopias-maracaibo?share'; 
    AOS.init({
        duration: 1000,
        once: true
    })

    return ( 
        <div id='about' data-aos="fade-right">
            <div className='about-image'>
                <img src={props.image} alt='' />
            </div>
            <div className='about-text'>
                <h2>{props.title}</h2>
                <p>{props.p}</p>
                <a 
                    className='cv-btn'
                    href={url} 
                    target='_blank'
                    rel="noreferrer"
                    >
                        {props.button}
                </a>
            </div>
        </div>
     );
}
 
export default About;
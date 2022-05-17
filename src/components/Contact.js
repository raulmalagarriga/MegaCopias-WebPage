import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

    const url = 'https://api.whatsapp.com/send?phone=04145391699';
    AOS.init({
        duration: 1000,
        once: true
    })
    return ( 
        <div id='contact' data-aos="fade-up">
            <h3>¡Envianos un mensaje!</h3>
            <div className='contact-input'>
                {/* <input type='email' placeholder='example@gmail.com' /> */}
                <a href={url} target='_blank' rel='noreferrer'>Contactanos</a>
            </div>
        </div>
     );
}
 
export default Contact;
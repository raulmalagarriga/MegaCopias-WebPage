import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

    const urlWs = 'https://api.whatsapp.com/send?phone=04145391699';
    const urlIg = 'https://www.instagram.com/megacopias/';
    const urlG = '';
    AOS.init({
        duration: 1000,
        once: true
    })
    return ( 
        <>
            <div id='contact' data-aos="fade-up">
                <h3>¡Envianos un mensaje!</h3>
                <div className='contact-input'>
                    {/* <input type='email' placeholder='example@gmail.com' /> */}
                    <a className='gmail' href={urlG} target='_blank' rel='noreferrer'>megacopias2@gmail.com</a>
                    <a className='whatsapp' href={urlWs} target='_blank' rel='noreferrer'>whatsapp</a>
                    <a className='instagram' href={urlIg} target='_blank' rel='noreferrer'>@megacopias</a>
                </div>
            </div>
        </>
     );
}
 
export default Contact;
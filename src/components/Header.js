import React from 'react';
import NavBar from './NavBar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {

    AOS.init({
        duration: 1000,
        once: true
    })

    return ( 
        <div id='main'>
            <NavBar />
            <div className='name' data-aos="fade-down">
                <h1><span>Mega Copias</span> , tu centro integral de copiado</h1>
                <p className='details'>¡Los mejores servicios en un solo lugar!</p>
            </div>
        </div>
     );
}
 
export default Header;